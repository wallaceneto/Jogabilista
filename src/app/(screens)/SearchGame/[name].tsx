import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

import useStyles from './styles';
import TextComponent from '../../../components/Text';
import Button from '../../../components/Button';
import PopularGames from '../../../global/pagesLib/SearchGame/components/PopularGames';

const SearchGame: React.FC = () => {
  const { name } = useLocalSearchParams();
  const styles = useStyles();

  const [queryString, setQueryString] = useState(name);
  const [results, setResults] = useState<string[]>([]);

  useEffect(() => {
    setQueryString(name.toString());
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextComponent light size={15}>
          {`Buscar jogo ${queryString}`}
        </TextComponent>

        <Button onPress={router.back}>
          <Ionicons
            name='close'
            style={styles.icon}
          />
        </Button>
      </View>

      {queryString === '' ? null
        : <PopularGames />
      }
    </View>
  );
}

export default SearchGame;