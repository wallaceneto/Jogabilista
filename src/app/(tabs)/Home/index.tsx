import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Modal, View } from 'react-native';

import useStyles from './styles';
import { ThemeContext } from '../../../storage/context';
import TextComponent from '../../../components/Text';
import { temporaryGames } from '../../../global/mock/games';
import GameCard from '../../../components/GameCard';
import Game from '../../../global/classes/Game';
import PageHeader from '../../../components/PageHeader';
import SearchBar from '../../../components/SearchBar';
import { cleanSearch, fetchSearch } from '../../../global/pagesLib/Home/lib';
import FilterButton from '../../../components/FilterButton';
import { IPlatformFilter, IScoreFilter, IStatusFilter } from '../../../global/pagesLib/Home/types';
import FilterModal from '../../../modals/FilterModal';

const Home: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  const style = useStyles();
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState<Game[]>([]);
  const [filterGames, setFilterGames] = useState<Game[]>([]);
  //search
  const [searchText, onChangeSearchText] = useState("");
  //filter
  const [filterModal, setFilterModal] = useState(false);
  const [platformFilter, setPlatformFilter] = useState<IPlatformFilter[]>([]);
  const [scoreFilter, setScoreFilter] = useState<IScoreFilter[]>([]);
  const [statusFilter, setStatusFilter] = useState<IStatusFilter[]>([]);

  const fetchFilter = async () => {
    setLoading(true);

    let gameList: Game[] = [];
    const data = games;

    data.forEach((item) => {
      const applyPlatformFilter
        = platformFilter.length > 0 ? platformFilter.includes(item.getPlatform) : true;
      const applyStatusFilter
        = statusFilter.length > 0 ? statusFilter.includes(item.getStatus) : true;
      const applyScoreFilter
        = scoreFilter.length > 0 ? scoreFilter.includes(item.getGameOverallScore()) : true;

      if (applyPlatformFilter && applyStatusFilter && applyScoreFilter) {
        gameList.push(item);
      }

    });

    setFilterGames(gameList);
    setLoading(false);
  }

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
    setFilterGames(gameList);
    
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const closeModal = () => {
    cleanSearch(onChangeSearchText, fetchFilter);
    fetchFilter();
    setFilterModal(false);
  }

  return (
    <View style={style.container}>
      <Modal
        transparent
        animationType='fade'
        visible={filterModal}
        onRequestClose={closeModal}
      >
        <FilterModal
          platformFilters={platformFilter}
          setPlatformFilters={setPlatformFilter}
          scoreFilters={scoreFilter}
          setScoreFilters={setScoreFilter}
          statusFilters={statusFilter}
          setStatusFilters={setStatusFilter}
          onClose={closeModal}
          onSubmit={() => {
            cleanSearch(onChangeSearchText, fetchFilter);
            fetchFilter();
          }}
        />
      </Modal>

      <PageHeader />

      <View style={style.container}>
        {loading ?
          <View style={style.loading}>
            <ActivityIndicator size='large' color={colors.primaryColor} />
          </View>
          :
          <View>
            <View style={style.search}>
              <FilterButton
                amount={platformFilter.length + scoreFilter.length + statusFilter.length}
                onPress={() => setFilterModal(true)}
              />
              
              <SearchBar
                text={searchText}
                onChangeText={onChangeSearchText}
                cleanSearch={() => cleanSearch(onChangeSearchText, fetchFilter)}
                handleSearch={() =>
                  fetchSearch(filterGames, searchText,  setLoading, setFilterGames)
                }
              />
            </View>

            <View style={style.content}>
              <FlatList
                data={filterGames}
                keyExtractor={game => game.getId}
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
