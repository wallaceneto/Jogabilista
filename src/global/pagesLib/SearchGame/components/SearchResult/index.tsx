import React, { useEffect, useState } from 'react';
import { Image, View } from 'react-native';

import useStyles from './styles';
import { ISearchResultProps } from './types';

import TextComponent from '../../../../../components/Text';
import Divider from '../../../../../components/Divider';
import LoadingIndicator from '../../../../../components/LoadingIndicator';
import Button from '../../../../../components/Button';
import { getCoverUrl } from '../../../../../services/getData';

const SearchResult: React.FC<ISearchResultProps> = ({ gameId, gameName }) => {
  const styles = useStyles();
  const [loading, setLoading] = useState(false);
  const [cover, setCover] = useState('not found');

  const fetchCover = async () => {
    if (gameId) {
      setLoading(true);
  
      const coverUrl = await getCoverUrl(gameId.toString(), 'cover_big');
      setCover(coverUrl || 'not found');
  
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCover();
  }, []);

  return (
    <View>
      <Button style={styles.container}>
        {loading ?
          <View style={styles.imageContainer}>
            <LoadingIndicator style={styles.loading} />
          </View>
          :
          cover !== 'not found' ?
            <Image
              style={styles.image}
              source={{ uri: cover }}
            />
            : 
            <View style={styles.imageContainer}>
              <TextComponent light>Não encontrado</TextComponent>
            </View>
        }

        <TextComponent weight='medium' style={styles.title}>
          {gameName}
        </TextComponent>
      </Button>

      <Divider />
    </View>
  );
}

export default SearchResult;