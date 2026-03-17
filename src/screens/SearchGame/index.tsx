import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
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
import TextComponent from '../../components/Text';

const SearchGame: React.FC<ISearchGameProps> = ({ route }) => {
  const name = route.params ? route.params.gameName : '';
  const navigation = useNavigation<NavigationProps>();
  const styles = useStyles();

  const [loading, setLoading] = useState(false);
  const [queryString, setQueryString] = useState<string>(name);
  const [results, setResults] = useState<IApiGames[]>([]);
  const [searchMade, setSearchMade] = useState(name ? true : false);

  const cleanSearch = () => {
    setSearchMade(false);
    setQueryString('');
    setResults([]);
  }

  useEffect(() => {
    // EM BREVE
    // if (name !== '') {
    //   setQueryString(name);
    //   handleSearch(name, setLoading, setResults, setSearchMade);
    // }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerSearch}>
          <Button onPress={() => navigation.goBack()}>
            <Ionicons
              name='arrow-back'
              style={styles.icon}
            />
          </Button>

          <SearchBar
            text={queryString}
            onChangeText={(value: string) => setQueryString(value)}
            handleSearch={() => handleSearch(queryString, setLoading, setResults, setSearchMade)}
            cleanSearch={() => cleanSearch()}
            borderless
          />
        </View>

        <Button
          style={styles.headerButton}
          onPress={() => handleSearch(queryString, setLoading, setResults, setSearchMade)}
        >
          <TextComponent weight='medium' light>
            Pesquisar
          </TextComponent>
        </Button>
      </View>

      <View style={styles.content}>
        <TextComponent style={styles.title} weight='bold'>
          EM BREVE
        </TextComponent>
      </View>
    </View>
  );

  // EM BREVE
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerSearch}>
          <Button onPress={() => navigation.goBack()}>
            <Ionicons
              name='arrow-back'
              style={styles.icon}
            />
          </Button>

          <SearchBar
            text={queryString}
            onChangeText={(value: string) => setQueryString(value)}
            handleSearch={() => handleSearch(queryString, setLoading, setResults, setSearchMade)}
            cleanSearch={() => cleanSearch()}
            borderless
          />
        </View>

        <Button
          style={styles.headerButton}
          onPress={() => handleSearch(queryString, setLoading, setResults, setSearchMade)}
        >
          <TextComponent weight='medium' light>
            Pesquisar
          </TextComponent>
        </Button>
      </View>

      {!searchMade
        ?
        <PopularGames
          setQueryString={(value: string) => {
            setQueryString(value);
            handleSearch(value, setLoading, setResults, setSearchMade)
          }}
        />
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