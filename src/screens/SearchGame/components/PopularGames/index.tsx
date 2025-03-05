import React, { useEffect, useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FlatList, View } from 'react-native';

import useStyles from './styles';
import { IGameResult } from '../../types';

import TextComponent from '../../../../components/Text';
import Divider from '../../../../components/Divider';
import Button from '../../../../components/Button';
import LoadingIndicator from '../../../../components/LoadingIndicator';
import { getPopularGames } from '../../../../services/getData';
import { IApiGames } from '../../../../global/types';

const PopularGames: React.FC = () => {
  const styles = useStyles();
  const [games, setGames] = useState<IGameResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);

      const response = await getPopularGames(8);

      if (response) {
        const allGames = response.data;
        let gamesName: IGameResult[] = [];

        allGames.forEach((game: IApiGames) => {
          if (game.id && game.name) gamesName.push({ id: game.id, name: game.name });
        });

        setGames(gamesName);
      }

      setLoading(false);
    }

    fetchGames();
  }, []);

  return (
    loading ? <LoadingIndicator style={styles.loading} /> :
      <View>
        <TextComponent weight='medium' style={styles.pageTitle}>
          Jogos Populares:
        </TextComponent>

        <FlatList
          data={games}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <>
              <Divider style={styles.divider} />

              <Button style={styles.button}>
                <Ionicons
                  name='search'
                  style={styles.icon}
                />

                <TextComponent weight='medium' style={styles.title}>
                  {item.name}
                </TextComponent>
              </Button>

            </>
          )
          }
        />
      </View>
  );
}

export default PopularGames;