import React from 'react';
import { View } from 'react-native';

import useStyles from './styles';
import TextComponent from '../../../components/Text';

const Games: React.FC = () => {
  const style = useStyles();

  return (
    <View style={{ flex: 1 }}>
      <View style={style.container}>
        <TextComponent light style={style.title}>
          Games
        </TextComponent>
      </View>

      <TextComponent>
        Tela com os games
      </TextComponent>
    </View>
  );
}

export default Games;