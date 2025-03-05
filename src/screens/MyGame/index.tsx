import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, FlatList, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import useStyles from './styles';
import { IMyGameProps, ITabType } from './types';
import { toggleTab } from './lib';
import LocalDataTab from './components/LocalDataTab';
import RemoteDataTab from './components/RemoteDataTab';

import TextComponent from '../../components/Text';
import RoundedButton from '../../components/RoundedButton';
import Button from '../../components/Button';
import ScoreTag from '../../components/ScoreTag';
import LoadingIndicator from '../../components/LoadingIndicator';
import { searchGame } from '../../services/getData';
import { IApiGames, NavigationProps } from '../../global/types';

const MyGame: React.FC<IMyGameProps> = ({ route }) => {
  const game = route.params.game;
  const navigation = useNavigation<NavigationProps>();
  const styles = useStyles();
  const flatListRef = useRef<FlatList>(null);
  const SCREEN_WIDTH = Dimensions.get('window').width;

  const [loading, setLoading] = useState(true);
  const [currentTab, setCurrentTab] = useState(0);
  const [tabs, setTabs] = useState<ITabType[]>();

  const handleSyncGame = async (gameName: string) => {
    const response = await searchGame(gameName);

    if (response) {
      if (response.status === 200) {
        const games: IApiGames[] = response.data;

        games.forEach(game => console.log(game.name));
      } else {
        console.log('Error ' + response.status);
      }
    }
  }

  useEffect(() => {
    setLoading(true);

    if (game) {
      setTabs([
        { item: <LocalDataTab game={game} />, index: 0 },
        { item: <RemoteDataTab sync_game_id={game.getSyncGame} />, index: 1 }
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
              <RoundedButton onPress={() => navigation.goBack()}>
                <Ionicons
                  name='arrow-back-outline'
                  style={styles.icon}
                />
              </RoundedButton>

              <View style={styles.gameCover}>
                {game.getCover ?
                  <TextComponent>Capa do jogo</TextComponent>
                  :
                  <Button
                    style={styles.syncGame}
                    onPress={() => 
                      navigation.push('SearchGame', { gameName: game.getName })
                    }
                  >
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

              <RoundedButton onPress={() => navigation.navigate('AddGame', { game })}>
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
                onPress={() => toggleTab(flatListRef, 0)}
              >
                <TextComponent>Meus dados</TextComponent>
              </Button>

              <Button
                style={[styles.tabButton, currentTab === 1 ? styles.tabButtonSelected : null]}
                onPress={() => toggleTab(flatListRef, 1)}
              >
                <TextComponent>Detalhes</TextComponent>
              </Button>
            </View>

            <FlatList
              ref={flatListRef}
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
                if (offset < 0.5) {
                  setCurrentTab(0);
                } else {
                  setCurrentTab(1);
                }
              }}
            />
          </>
      }
    </View>
  );
}

export default MyGame;