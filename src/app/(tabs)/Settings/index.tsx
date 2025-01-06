import React from 'react';
import { View } from 'react-native';

import useStyles from './styles';
import TextComponent from '../../../components/Text';

const Settings: React.FC = () => {
  const style = useStyles();

  return (
    <View style={{ flex: 1 }}>
      <View style={style.container}>
        <TextComponent light style={style.title}>
          Settings
        </TextComponent>
      </View>
      
      <TextComponent>
        Tela de ajustes
      </TextComponent>
    </View>
  );
}

export default Settings;