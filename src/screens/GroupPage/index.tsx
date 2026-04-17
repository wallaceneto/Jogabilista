import React, { useEffect, useState } from 'react';
import { FlatList, Modal, View } from 'react-native';
import { useSelector } from 'react-redux';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import useStyles from './styles';
import { IGroupPageProps } from './types';
import { exportDataToExcel } from './utils';
import TextComponent from '../../components/Text';
import PageHeader from '../../components/PageHeader';
import { RootState } from '../../reducers/store';
import Button from '../../components/Button';
import GameCard from '../../components/GameCard';
import Game from '../../global/classes/Game';
import { fetchGames } from '../../global/lib';
import { NavigationProps } from '../../global/types';
import CreateGroup from '../Groups/modals/CreateGroup';
import { formatGameXlsx } from './utils/formatGameXlsx';

const GroupPage: React.FC<IGroupPageProps> = ({ route }) => {
  const navigation = useNavigation<NavigationProps>();
  const styles = useStyles();
  const allGames = useSelector((state: RootState) => state.user.allGames);
  const group = route.params.group;
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState<Game[]>([]);

  const fetchData = () => {
    const groupGamesId = group.games.map(g => g.id);
    const gameList = allGames.filter((item) => item.id && groupGamesId.includes(item.id));

    fetchGames(gameList, setLoading, setGames);
  }

  useEffect(() => {
    fetchData();
  }, [group]);

  return (
    <View style={styles.container}>
      <Modal
        visible={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        animationType='slide'
      >
        <CreateGroup
          onClose={() => setModalOpen(false)}
          group={group}
        />
      </Modal>

      <PageHeader />

      <View style={styles.content}>
        <Button style={styles.goBackButton} onPress={() => navigation.goBack()}>
          <Ionicons name='arrow-back' style={styles.goBackIcon} />
          <TextComponent style={styles.title} weight='semibold' >
            {group.name}
          </TextComponent>
        </Button>

        <View style={styles.actionContainer}>
          <Button
            style={styles.flatButton}
            onPress={() => setModalOpen(true)}
          >
            <Ionicons name='pencil' style={styles.flatButtonIcon} />
            <TextComponent weight='semibold'>Editar grupo</TextComponent>
          </Button>

          <Button
            style={styles.flatButton}
            onPress={() => exportDataToExcel(formatGameXlsx(games), group.name)}
          >
            <Ionicons name='download-outline' style={styles.flatButtonIcon} />
            <TextComponent weight='semibold'>Exportar planilha</TextComponent>
          </Button>
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
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