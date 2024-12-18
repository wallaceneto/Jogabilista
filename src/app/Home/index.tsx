import React from 'react';
import { Text, View } from 'react-native';

import useStyles from './styles';

const Home: React.FC = () => {
  const style = useStyles();

  return (
    <View style={style.container}>
      <Text style={style.title}>Home</Text>
    </View>
  );
}

export default Home;