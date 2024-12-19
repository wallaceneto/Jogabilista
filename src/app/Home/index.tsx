import React from 'react';
import { FlatList, Text, View } from 'react-native';

import useStyles from './styles';
import HomeHeader from '../../components/HomeHeader';

const Home: React.FC = () => {
  const style = useStyles();

  return (
    <View>
      <HomeHeader />
    </View>
  );
}

export default Home;