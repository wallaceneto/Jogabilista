import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';

import useStyles from './styles';
import { ThemeContext } from '../../storage/context';
import HomeHeader from '../../components/HomeHeader';
import TabBar from '../../components/TabBar';
import TextComponent from '../../components/Text';
import { temporaryGames } from '../../global/mock/games';
import GameCard from '../../components/GameCard';
import Game from '../../global/classes/Game';

const Home: React.FC = () => {
  const {colors} = useContext(ThemeContext);

  const style = useStyles();
  const [loading, setLoading] = useState(true)
  const [games, setGames] = useState<Game[]>([]);

  const fetchData = async () => {
    setLoading(true);

    let gameList: Game[] = [];

    const data = temporaryGames;
    data.forEach((item) => {
      try {
        const game = new Game(item);
        gameList.push(game);
      } catch (e) {
        console.error(e)
      }
    });

    setGames(gameList);

    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {loading ?
        <ActivityIndicator color={colors.primaryColor} size='large' />
      :
        <FlatList
          data={games}
          keyExtractor={item => item.getId}
          ListHeaderComponent={() => 
            <View style={style.container}>
              <TextComponent light style={style.title}>
                Home
              </TextComponent>
            </View>
          }
          renderItem={({ item }) =>
            <View style={style.content}>
              <GameCard game={item} />
            </View>
          }
        />
      }
    </View>
  );
}

export default Home;