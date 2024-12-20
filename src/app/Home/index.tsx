import React from 'react';
import { FlatList, View } from 'react-native';

import useStyles from './styles';
import HomeHeader from '../../components/HomeHeader';
import TabBar from '../../components/TabBar';
import TextComponent from '../../components/Text';

import { temporaryGames } from '../../global/mock/games';
import GameCard from '../../components/GameCard';

const Home: React.FC = () => {
  const style = useStyles();

  return (
    <View style={{ flex: 1 }}>

      <FlatList
        data={temporaryGames}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => 
          <View style={style.container}>
            <TextComponent light style={style.title}>
              Home
            </TextComponent>
          </View>
        }
        renderItem={({ item }) =>
          <View style={style.content}>
            <GameCard game={item} />
          </View>
        }
      />

    </View>
  );
}

export default Home;