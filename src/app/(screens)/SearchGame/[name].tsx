import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import debounce from 'lodash/debounce';

import useStyles from './styles';
import Button from '../../../components/Button';
import PopularGames from '../../../global/pagesLib/SearchGame/components/PopularGames';
import SearchBar from '../../../components/SearchBar';
import { IApiGames } from '../../../global/types';
import LoadingIndicator from '../../../components/LoadingIndicator';
import SearchResult from '../../../global/pagesLib/SearchGame/components/SearchResult';
import { handleSearch } from '../../../global/pagesLib/SearchGame/lib';

const SearchGame: React.FC = () => {
  const { name } = useLocalSearchParams();
  const styles = useStyles();

  const [loading, setLoading] = useState(false);
  const [queryString, setQueryString] = useState<string>(name.toString());
  const [results, setResults] = useState<IApiGames[]>([]);
  
  const debounceSearch = useCallback(debounce(() => 
    {console.log(queryString)}, 500), 
  []);

  useEffect(() => {
    if (name) {
      const gameName = name.toString();
      setQueryString(gameName);
      handleSearch(gameName, setLoading, setResults, setQueryString);
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SearchBar
          text={queryString}
          onChangeText={(value: string) => { setQueryString(value); debounceSearch; }}
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

      {queryString === ''
        ? <PopularGames />
        :
        loading ? <LoadingIndicator style={styles.loading} /> :
          <View style={styles.container}>
            <FlatList
              data={results}
              keyExtractor={item => item.id}
              renderItem={({ item }) =>
                <SearchResult gameId={item.cover} gameName={item.name} />
              }
              showsVerticalScrollIndicator={false}
            />
          </View>
      }
    </View>
  );
}

export default SearchGame;