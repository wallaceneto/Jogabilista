import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, FlatList, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router, useLocalSearchParams } from 'expo-router';
import { useSelector } from 'react-redux';

import useStyles from './styles';
import LocalDataTab from '../../../global/pagesLib/MyGame/components/LocalDataTab';
import RemoteDataTab from '../../../global/pagesLib/MyGame/components/RemoteDataTab';

import TextComponent from '../../../components/Text';
import Game from '../../../global/classes/Game';
import RoundedButton from '../../../components/RoundedButton';
import Button from '../../../components/Button';
import ScoreTag from '../../../components/ScoreTag';
import { RootState } from '../../../reducers/store';
import LoadingIndicator from '../../../components/LoadingIndicator';

type TabType = {
  item: React.ReactNode;
  index: number;
};

const MyGame: React.FC = () => {
  const { id } = useLocalSearchParams();
  const allGames = useSelector((state: RootState) => state.user.allGames);
  
  const styles = useStyles();
  const flatListRef = useRef<FlatList>(null);
  const SCREEN_WIDTH = Dimensions.get('window').width;
  
  const [loading, setLoading] = useState(true);
  const [currentTab, setCurrentTab] = useState(0);
  const [game, setGame] = useState<Game | undefined>(undefined);
  const [tabs, setTabs] = useState<TabType[]>();

  const toggleTab = (tab: number) => {
    flatListRef.current?.scrollToIndex({ index: tab });
  }

  useEffect(() => {
    setLoading(true);

    const data = allGames.find(game => game.id === id);

    if (data) {
      const currentGame = new Game(data);
      setGame(currentGame);
      setTabs([
        { item: <LocalDataTab game={currentGame} />, index: 0 },
        { item: <RemoteDataTab sync_game_id={currentGame.getSyncGame} />, index: 1 }
      ]);
    }

    setLoading(false);
  }, []);

  return (
    <View style={styles.container}>
      {loading ? <LoadingIndicator style={styles.loading} /> :
        game === undefined ?
          <TextComponent weight='bold' style={styles.errorMsg}>
            Falha ao encontrar o jogo!
          </TextComponent>
          :
          <>
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
                  <Button style={styles.syncGame} onPress={() => console.log(game.getId)}>
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

              <RoundedButton onPress={() => router.push(`/AddGame/${id}`)}>
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
          </>
      }
    </View>
  );
}

export default MyGame;