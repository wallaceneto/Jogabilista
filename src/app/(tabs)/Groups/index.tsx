import React from 'react';
import { View } from 'react-native';

import useStyles from './styles';
import TextComponent from '../../../components/Text';
import PageHeader from '../../../components/PageHeader';

const Groups: React.FC = () => {
  const styles = useStyles();

  return (
    <View style={{ flex: 1 }}>
      <PageHeader />

      <TextComponent weight='semibold' size={20}>
        Tela com os grupos
      </TextComponent>
    </View>
  );
}

export default Groups;