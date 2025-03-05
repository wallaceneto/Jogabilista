import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import debounce from 'lodash/debounce';
import { useNavigation } from '@react-navigation/native';

import useStyles from './styles';
import { ISearchGameProps } from './types';
import PopularGames from './components/PopularGames';
import SearchResult from './components/SearchResult';
import { handleSearch } from './lib';
import Button from '../../components/Button';
import SearchBar from '../../components/SearchBar';
import { IApiGames, NavigationProps } from '../../global/types';
import LoadingIndicator from '../../components/LoadingIndicator';

const SearchGame: React.FC<ISearchGameProps> = ({ route }) => {
  const name = route.params ? route.params.gameName : '' ;
  const navigation = useNavigation<NavigationProps>();
  const styles = useStyles();

  const [loading, setLoading] = useState(false);
  const [queryString, setQueryString] = useState<string>(name);
  const [results, setResults] = useState<IApiGames[]>([]);
  
  const debounceSearch = useCallback(debounce(() => 
    {console.log(queryString)}, 500), 
  []);

  useEffect(() => {
    if (name !== '') {
      setQueryString(name);
      handleSearch(name, setLoading, setResults, setQueryString);
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

        <Button onPress={() => navigation.goBack()}>
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