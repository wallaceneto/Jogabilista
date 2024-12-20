import React from 'react';
import { View } from 'react-native';

import useStyles from './styles';
import TabBar from '../../components/TabBar';
import TextComponent from '../../components/Text';

const Groups: React.FC = () => {
  const style = useStyles();

  return (
    <View style={{ flex: 1 }}>
      <View style={style.container}>
        <TextComponent light style={style.title}>
          Groups
        </TextComponent>
      </View>

      <TabBar tab={1} />
    </View>
    );
}

export default Groups;