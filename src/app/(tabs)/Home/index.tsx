import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';

import useStyles from './styles';
import { ThemeContext } from '../../../storage/context';
import TextComponent from '../../../components/Text';
import { temporaryGames } from '../../../global/mock/games';
import GameCard from '../../../components/GameCard';
import Game from '../../../global/classes/Game';
import PageHeader from '../../../components/PageHeader';

const Home: React.FC = () => {
  const { colors } = useContext(ThemeContext);

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
      <PageHeader />

      <View style={style.container}>
        { loading ?
          <View style={style.loading}>
            <ActivityIndicator size='large' color={colors.primaryColor} /> 
          </View>
        : 
          <View>
            <View style={style.search}>
              <TextComponent weight='light'>Filtro</TextComponent>
              <TextComponent weight='light'>Busca</TextComponent>
            </View>

            <View style={style.content}>
              <FlatList
                data={games}
                keyExtractor={item => item.getId}
                ListHeaderComponent={() => 
                  <TextComponent weight='bold' style={style.title}>
                    Jogos recentes
                  </TextComponent>
                }
                renderItem={({ item }) => <GameCard game={item} /> }
                showsVerticalScrollIndicator={false}
              />
            </View>
          </View>
        }
      </View>
    </View>
  );
}

export default Home;
