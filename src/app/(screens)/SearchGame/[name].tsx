import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

import useStyles from './styles';
import TextComponent from '../../../components/Text';
import Button from '../../../components/Button';
import PopularGames from '../../../global/pagesLib/SearchGame/components/PopularGames';
import SearchBar from '../../../components/SearchBar';
import GamesResults from '../../../global/pagesLib/SearchGame/components/GamesResults';

const SearchGame: React.FC = () => {
  const { name } = useLocalSearchParams();
  const styles = useStyles();

  const [queryString, setQueryString] = useState<string>(name.toString());
  const [results, setResults] = useState<string[]>([]);

  useEffect(() => {
    setQueryString(name.toString());
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SearchBar
          text={queryString}
          onChangeText={setQueryString}
          cleanSearch={() => setQueryString('')}
          handleSearch={() => {}}
          borderless
        />

        <Button onPress={router.back}>
          <Ionicons
            name='close'
            style={styles.icon}
          />
        </Button>
      </View>

      {queryString !== '' 
        ? <GamesResults queryString={queryString} />
        : <PopularGames />
      }
    </View>
  );
}

export default SearchGame;