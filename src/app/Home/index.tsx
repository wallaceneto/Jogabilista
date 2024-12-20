import React from 'react';
import { View } from 'react-native';

import useStyles from './styles';
import HomeHeader from '../../components/HomeHeader';
import TabBar from '../../components/TabBar';
import TextComponent from '../../components/Text';

const Home: React.FC = () => {
  const style = useStyles();

  return (
    <View style={{ flex: 1 }}>
      <View style={style.container}>
        <TextComponent light style={style.title}>
          Home
        </TextComponent>
      </View>

      <TabBar tab={0} />

    </View>
  );
}

export default Home;