import React, { useEffect, useState } from 'react';
import { FlatList, Modal, View } from 'react-native';
import { useSelector } from 'react-redux';
import useStyles from './styles';
import { IPlatformFilter, IScoreFilter, IStatusFilter } from './types';
import { cleanSearch, fetchFilter, fetchSearch } from './lib';
import TextComponent from '../../components/Text';
import GameCard from '../../components/GameCard';
import Game from '../../global/classes/Game';
import PageHeader from '../../components/PageHeader';
import SearchBar from '../../components/SearchBar';
import FilterButton from '../../components/FilterButton';
import FilterModal from '../../modals/FilterModal';
import LoadingIndicator from '../../components/LoadingIndicator';
import { RootState } from '../../reducers/store';
import { fetchGames } from '../../global/lib';

const Home: React.FC = () => {
  const styles = useStyles();
  const allGames = useSelector((state: RootState) => state.user.allGames);

  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState<Game[]>([]);
  const [filterGames, setFilterGames] = useState<Game[]>([]);
  //search
  const [searchText, onChangeSearchText] = useState("");
  //filter
  const [modalVisible, setModalVisible] = useState(false);
  const [platformFilter, setPlatformFilter] = useState<IPlatformFilter[]>([]);
  const [scoreFilter, setScoreFilter] = useState<IScoreFilter[]>([]);
  const [statusFilter, setStatusFilter] = useState<IStatusFilter[]>([]);

  useEffect(() => {
    fetchGames(allGames, setLoading, setGames, setFilterGames);
  }, [allGames]);

  return (
    <View style={styles.container}>
      <Modal
        transparent
        animationType='fade'
        visible={modalVisible}
        onRequestClose={() => {
          cleanSearch(
            onChangeSearchText,
            () => fetchFilter(games, platformFilter, statusFilter, scoreFilter, setLoading, setFilterGames)
          );
          fetchFilter(games, platformFilter, statusFilter, scoreFilter, setLoading, setFilterGames);
          setModalVisible(false);
        }}
      >
        <FilterModal
          platformFilters={platformFilter}
          setPlatformFilters={setPlatformFilter}
          scoreFilters={scoreFilter}
          setScoreFilters={setScoreFilter}
          statusFilters={statusFilter}
          setStatusFilters={setStatusFilter}
          applyFilter={() => {
            cleanSearch(
              onChangeSearchText,
              () => fetchFilter(games, platformFilter, statusFilter, scoreFilter, setLoading, setFilterGames)
            );
            fetchFilter(games, platformFilter, statusFilter, scoreFilter, setLoading, setFilterGames);
            setModalVisible(false);
          }}
        />
      </Modal>

      <PageHeader />

      <View style={styles.content}>
        {loading ? <LoadingIndicator style={styles.loading} /> :
          <>
            <View style={styles.search}>
              <FilterButton
                amount={platformFilter.length + scoreFilter.length + statusFilter.length}
                onPress={() => setModalVisible(true)}
              />

              <SearchBar
                text={searchText}
                onChangeText={onChangeSearchText}
                cleanSearch={
                  () => cleanSearch(
                    onChangeSearchText,
                    () => fetchFilter(games, platformFilter, statusFilter, scoreFilter, setLoading, setFilterGames)
                  )
                }
                handleSearch={() =>
                  fetchSearch(filterGames, searchText, setLoading, setFilterGames)
                }
              />
            </View>

            <FlatList
              style={styles.list}
              data={filterGames}
              keyExtractor={game => game.getId}
              renderItem={({ item }) => <GameCard game={item} />}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={() =>
                <TextComponent weight='bold' style={styles.title}>
                  Nenhum jogo encontrado
                </TextComponent>
              }
              refreshing={loading}
              onRefresh={() => fetchGames(allGames, setLoading, setGames, setFilterGames)}
            />
          </>
        }
      </View>
    </View>
  );
}

export default Home;
