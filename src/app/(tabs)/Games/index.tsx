import React from 'react';
import { View } from 'react-native';

import useStyles from './styles';
import TextComponent from '../../../components/Text';
import PageHeader from '../../../components/PageHeader';

const Games: React.FC = () => {
  const styles = useStyles();

  return (
    <View style={{ flex: 1 }}>
      <PageHeader />

      <TextComponent weight='semibold' size={20}>
        Tela para pesquisar jogos
      </TextComponent>
    </View>
  );
}

export default Games;