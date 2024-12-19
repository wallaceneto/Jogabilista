import React from 'react';
import { View } from 'react-native';

import useStyles from './styles';
import TextComponent from '../../components/Text';

const Home: React.FC = () => {
  const style = useStyles();

  return (
    <View>
      <View style={style.container}>
        <TextComponent light style={style.title} weight='bold'>
          Jogabilista
        </TextComponent>
      </View>

      <View>
        <TextComponent weight='light'>Finalizado</TextComponent>
        <TextComponent>Finalizado</TextComponent>
        <TextComponent weight='medium'>Finalizado</TextComponent>
        <TextComponent weight='semibold'>Finalizado</TextComponent>
        <TextComponent weight='bold'>Finalizado</TextComponent>
      </View>
    </View>
  );
}

export default Home;