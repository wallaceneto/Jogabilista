import React, { useRef, useState } from 'react';
import { Dimensions, FlatList, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';

import useStyles from './styles';
import LocalDataTab from '../../../global/pagesLib/MyGame/components/LocalDataTab';
import RemoteDataTab from '../../../global/pagesLib/MyGame/components/RemoteDataTab';

import TextComponent from '../../../components/Text';
import Game from '../../../global/classes/Game';
import RoundedButton from '../../../components/RoundedButton';
import Button from '../../../components/Button';
import ScoreTag from '../../../components/ScoreTag';

const game = new Game({
  id: '12',
  create_date: '2025-02-03T16:55:50.160Z',
  name: 'Super Mario Wonder',
  platform: 'Nintendo',
  status: 'Terminado',
  interest_score: 10, // Eixo x = interessancia
  quality_score: 10, // Eixo y = qualidade (0 representando 'J' e 10 representando 'A')
  play_time: 497,
  finish_date: '2025-02-03T16:55:50.160Z',
});

const MyGame: React.FC = () => {
  const styles = useStyles();
  const flatListRef = useRef<FlatList>(null);
  const SCREEN_WIDTH = Dimensions.get('window').width;
  const [currentTab, setCurrentTab] = useState(0);

  const tabs = [
    { item: <LocalDataTab game={game} />, index: 0 },
    { item: <RemoteDataTab sync_game_id={game.getSyncGame} />, index: 1 }
  ];

  const toggleTab = (tab: number) => {
    flatListRef.current?.scrollToIndex({index: tab});
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <RoundedButton onPress={() => router.back()}>
          <Ionicons
            name='arrow-back-outline'
            style={styles.icon}
          />
        </RoundedButton>

        <View style={styles.gameCover}>
          {game.getCover ?
            <TextComponent>Capa do jogo</TextComponent>
            :
            <Button style={styles.syncGame} onPress={() => {}}>
              <Ionicons
                name='add'
                style={styles.syncGameIcon}
              />

              <TextComponent weight='medium'>
                Vincular jogo
              </TextComponent>
            </Button>
          }
        </View>

        <RoundedButton onPress={() => { }}>
          <Ionicons
            name='create-outline'
            style={styles.icon}
          />
        </RoundedButton>

      </View>
      <View style={styles.scoreTag}>
        <ScoreTag
          score={game.getOverallScore()}
          quadrant={game.getScoreQuadrant()}
        />
      </View>

      <TextComponent weight='bold' style={styles.gameTitle}>
        {game.getName}
      </TextComponent>

      <View style={styles.tabContainer}>
        <Button
          style={[styles.tabButton, currentTab === 0 ? styles.tabButtonSelected : null]}
          onPress={() => toggleTab(0)}
        >
          <TextComponent>Meus dados</TextComponent>
        </Button>

        <Button
          style={[styles.tabButton, currentTab === 1 ? styles.tabButtonSelected : null]}
          onPress={() => toggleTab(1)}
        >
          <TextComponent>Detalhes</TextComponent>
        </Button>
      </View>

      <FlatList
        ref={flatListRef}
        style={styles.content}
        data={tabs}
        keyExtractor={item => item.index.toString()}
        renderItem={({ item }) => item.item}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={SCREEN_WIDTH}
        decelerationRate='fast'
        snapToAlignment='center'
        pagingEnabled={true}
        scrollEventThrottle={0}
        onScroll={(data) => {
          let offset = data.nativeEvent.contentOffset.x / SCREEN_WIDTH;
          offset = Math.floor(offset);
          if (offset < 0) offset = 0;

          setCurrentTab(offset);
        }}
      />
    </View>
  );
}

export default MyGame;