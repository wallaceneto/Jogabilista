import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';

import useStyles from './styles';
import { ThemeContext } from '../../../storage/context';
import TextComponent from '../../../components/Text';
import { temporaryGames } from '../../../global/mock/games';
import GameCard from '../../../components/GameCard';
import Game from '../../../global/classes/Game';
import PageHeader from '../../../components/PageHeader';
import SearchBar from '../../../components/SearchBar';
import { cleanSearch, fetchSearch } from '../../../global/lib/Home';

const Home: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  const style = useStyles();
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState<Game[]>([]);
  const [filterGames, setFilterGames] = useState<Game[]>([]);
  //search bar
  const [searchText, onChangeSearchText] = useState("");
  const [showLabel, setShowLabel] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    setShowLabel(true);

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
    setFilterGames(gameList);
    if (gameList.length === 0) setShowLabel(false);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <PageHeader />

      <View style={style.container}>
        {loading ?
          <View style={style.loading}>
            <ActivityIndicator size='large' color={colors.primaryColor} />
          </View>
          :
          <View>
            <View style={style.search}>
              <TextComponent weight='light'>Filtro</TextComponent>

              <SearchBar
                text={searchText}
                onChangeText={onChangeSearchText}
                cleanSearch={() => cleanSearch(onChangeSearchText, fetchData)}
                handleSearch={() => 
                  fetchSearch(searchText, fetchData, setLoading, games, setFilterGames, setShowLabel)
                }
              />
            </View>

            <View style={style.content}>
              <FlatList
                data={filterGames}
                keyExtractor={game => game.getId}
                ListHeaderComponent={() =>
                  filterGames.length > 0 && showLabel ?
                    <TextComponent weight='bold' style={style.title}>
                      Jogos recentes
                    </TextComponent>
                  : null
                }
                renderItem={({ item }) => <GameCard game={item} />}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => 
                  <TextComponent weight='bold' style={style.title}>
                    Nenhum jogo encontrado
                  </TextComponent>
                }
              />
            </View>
          </View>
        }
      </View>
    </View>
  );
}

export default Home;
