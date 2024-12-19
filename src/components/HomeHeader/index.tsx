import React from 'react';
import { View } from 'react-native';

import useStyles from './styles';
import TextComponent from '../Text';

const HomeHeader: React.FC = () => {
  const style = useStyles();

  return (
    <View style={style.container}>
        <TextComponent light weight='bold' style={style.title}>
          Jogabilista
        </TextComponent>
      </View>
  );
}

export default HomeHeader;