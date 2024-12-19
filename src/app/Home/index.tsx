import React from 'react';
import { FlatList, Text, View } from 'react-native';

import useStyles from './styles';
import HomeHeader from '../../components/HomeHeader';
import TabBar from '../../components/TabBar';

const Home: React.FC = () => {
  const style = useStyles();

  return (
    <View style={{ flex: 1 }}>
      <View style={style.container}>
        <Text style={style.title}>Home</Text>
      </View>

      <TabBar tab={0} />

    </View>
  );
}

export default Home;