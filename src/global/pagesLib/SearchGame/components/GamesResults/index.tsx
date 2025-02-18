import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';

import useStyles from './styles';
import { IGameResultsProps } from './types';

import LoadingIndicator from '../../../../../components/LoadingIndicator';
import { searchGame } from '../../../../../services/getData';
import { IApiGames } from '../../../../types';
import SearchResult from '../SearchResult';

const GamesResults: React.FC<IGameResultsProps> = ({ queryString }) => {
  const styles = useStyles();
  const [loading, setLoading] = useState(false);
  const [games, setGames] = useState<IApiGames[]>([]);

  const handleSearch = async () => {
    setLoading(true);

    const query = queryString.trim();
    if (query) {
      const response = await searchGame(query);
      
      if (response) {
        let gamesName: IApiGames[] = [];

        response.data.forEach((game: IApiGames) => {
          if (game.id && game.name) gamesName.push(game);
        });
      
        setGames(gamesName);
      }
    }

    setLoading(false);
  }

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    loading ? <LoadingIndicator style={styles.loading} /> :
      <View style={styles.container}>
        <FlatList
          data={games}
          keyExtractor={item => item.id}
          renderItem={({ item }) => 
            <SearchResult gameId={item.cover} gameName={item.name} />
          }
          showsVerticalScrollIndicator={false}
        />
      </View>
  );
}

export default GamesResults;