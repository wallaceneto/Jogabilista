import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import useStyles from './styles';
import TextComponent from '../../components/Text';
import PageHeader from '../../components/PageHeader';
import StyledButton from '../../components/StyledButton';
import GroupCard from './components/GroupCard';
import { IGroup } from '../../global/types';

import groupMock from '../../services/mock/groups.json';

const Groups: React.FC = () => {
  const styles = useStyles();
  const [allGroups, setAllGroups] = useState<IGroup[]>([]);

  useEffect(() => {
    setAllGroups(groupMock);
  }, []);

  return (
    <View style={styles.container}>
      <PageHeader />

      <View style={styles.content}>
        <StyledButton style={styles.button} onPress={() => { }}>
          <Ionicons name='add-circle' style={styles.buttonIcon} />

          <TextComponent style={styles.buttonText} weight='semibold'>
            Criar grupo
          </TextComponent>
        </StyledButton>

        <TextComponent style={styles.title} weight='bold'>
          Meus Grupos
        </TextComponent>

        <FlatList
          style={styles.groupList}
          showsVerticalScrollIndicator={false}
          data={allGroups}
          keyExtractor={group => group.id}
          renderItem={({ item }) => <GroupCard group={item} />}
        />
      </View>
    </View>
  );
}

export default Groups;