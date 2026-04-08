import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { useSelector } from 'react-redux';
import Ionicons from '@expo/vector-icons/Ionicons';
import useStyles from './styles';
import { IGroupPageProps } from './types';
import TextComponent from '../../components/Text';
import PageHeader from '../../components/PageHeader';
import { RootState } from '../../reducers/store';
import Button from '../../components/Button';
import GameCard from '../../components/GameCard';
import Game from '../../global/classes/Game';
import { fetchGames } from '../../global/lib';

const GroupPage: React.FC<IGroupPageProps> = ({ route }) => {
  const styles = useStyles();
  const allGames = useSelector((state: RootState) => state.user.allGames);
  const group = route.params.group;
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState<Game[]>([]);
  const [filterGames, setFilterGames] = useState<Game[]>([]);

  const fetchData = () => {
    const groupGamesId = group.games.map(g => g.id);
    const gameList = allGames.filter((item) => item.id && groupGamesId.includes(item.id));

    fetchGames(gameList, setLoading, setGames, setFilterGames);
  }

  useEffect(() => {
    fetchData();
  }, [group]);

  return (
    <View style={styles.container}>
      <PageHeader />

      <View style={styles.content}>
        <TextComponent style={styles.title} weight='semibold' >
          {group.name}
        </TextComponent>

        <View style={styles.actionContainer}>
          <Button style={styles.flatButton} onPress={() => { }}>
            <Ionicons name='pencil' style={styles.flatButtonIcon} />
            <TextComponent weight='semibold'>Editar grupo</TextComponent>
          </Button>

          <Button style={styles.flatButton} onPress={() => { }}>
            <Ionicons name='download-outline' style={styles.flatButtonIcon} />
            <TextComponent weight='semibold'>Exportar planilha</TextComponent>
          </Button>
        </View>

        <FlatList
          style={styles.list}
          data={games}
          keyExtractor={(item) => item.getId}
          renderItem={({ item }) => <GameCard game={item} />}
          ListEmptyComponent={() =>
            <TextComponent style={styles.emptyText} weight='bold'>
              Sem jogos no grupo
            </TextComponent>
          }
          refreshing={loading}
          onRefresh={() => fetchData()}
        />
      </View>
    </View>
  );
}

export default GroupPage;