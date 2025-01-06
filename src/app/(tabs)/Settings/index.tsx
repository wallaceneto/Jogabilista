import React from 'react';
import { View } from 'react-native';

import useStyles from './styles';
import TextComponent from '../../../components/Text';
import PageHeader from '../../../components/PageHeader';

const Settings: React.FC = () => {
  const style = useStyles();

  return (
    <View style={{ flex: 1 }}>
      <PageHeader />

      <TextComponent weight='semibold' size={20}>
        Tela de configurações
      </TextComponent>
    </View>
  );
}

export default Settings;