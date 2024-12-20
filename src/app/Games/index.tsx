import React from 'react';
import { View } from 'react-native';

import useStyles from './styles';
import TabBar from '../../components/TabBar';
import TextComponent from '../../components/Text';

const Games: React.FC = () => {
  const style = useStyles();

  return (
    <View style={{ flex: 1 }}>
      <View style={style.container}>
        <TextComponent light style={style.title}>
          Games
        </TextComponent>
      </View>

      <TabBar tab={2} />
    </View>
    );
}

export default Games;