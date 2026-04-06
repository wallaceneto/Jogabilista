import React, { useEffect, useState } from 'react';
import { FlatList, Modal, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import useStyles from './styles';
import CreateGroup from './modals/CreateGroup';
import TextComponent from '../../components/Text';
import PageHeader from '../../components/PageHeader';
import StyledButton from '../../components/StyledButton';
import GroupCard from './components/GroupCard';
import { IGroup } from '../../global/types';
import { RootState } from '../../reducers/store';

const Groups: React.FC = () => {
  const styles = useStyles();
  const allGroups = useSelector((state: RootState) => state.user.allGroups);
  const [groups, setGroups] = useState<IGroup[]>([]);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const fetchData = () => {
    setLoading(true);
    setGroups([...allGroups]);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [allGroups]);

  return (
    <View style={styles.container}>
      <Modal
        visible={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        animationType='slide'
      >
        <CreateGroup onClose={() => setModalOpen(false)} />
      </Modal>

      <PageHeader />

      <View style={styles.content}>
        <StyledButton
          style={styles.button}
          onPress={() => setModalOpen(true)}
        >
          <Ionicons name='add-circle' style={styles.buttonIcon} />

          <TextComponent style={styles.buttonText} weight='semibold'>
            Criar grupo
          </TextComponent>
        </StyledButton>

        <FlatList
          style={styles.groupList}
          showsVerticalScrollIndicator={false}
          data={groups}
          keyExtractor={group => group.id}
          renderItem={({ item }) => <GroupCard group={item} />}
          refreshing={loading}
          onRefresh={() => fetchData()}
          ListEmptyComponent={() =>
            <View style={styles.emptyList}>
              <Ionicons name='file-tray-outline' style={styles.emptyListIcon} />
              <TextComponent weight='bold' style={styles.emptyListText}>
                Nenhum grupo cadastrado
              </TextComponent>
            </View>
          }
        />
      </View>
    </View>
  );
}

export default Groups;