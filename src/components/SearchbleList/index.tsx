import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import useStyles from './styles';
import { ISearchableListProps } from './types';
import TextComponent from '../Text';
import TextField from '../TextField';
import Button from '../Button';
import Divider from '../Divider';
import { IGame } from '../../global/types';

const SearchableList: React.FC<ISearchableListProps> = ({ list, onItemSelect }) => {
  const styles = useStyles();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchableGames, setSearchableGames] = useState<IGame[]>([]);
  const [showItems, setShowItems] = useState(false);

  const selectItem = (item: any) => {
    onItemSelect(item);
    setShowItems(false);
    setSearchQuery('');
  }

  const searchGameQuery = (searchQuery: string) => {
    let games: IGame[] = [];
    games = list.filter((item) => item.name.startsWith(searchQuery));
    setSearchableGames(games);
  }

  const handleTextChange = (text: string) => {
    setSearchQuery(text);
    searchGameQuery(text);
  }

  return (
    <View style={styles.container}>
      <TextField
        value={searchQuery}
        onTextChange={handleTextChange}
        placeholder='Digite para pesquisar'
        onFocus={() => setShowItems(true)}
      />

      {showItems && searchQuery.length > 2 &&
        <FlatList
          style={styles.searchList}
          data={searchableGames}
          keyExtractor={(item, index) => item.id || index.toString()}
          renderItem={({ item }) =>
            <Button
              style={styles.itemButton}
              onPress={() => selectItem(item)}
            >
              <TextComponent>{item.name}</TextComponent>
            </Button>
          }
          ListEmptyComponent={() =>
            <TextComponent style={styles.emptyText}>
              Nenhum jogo encontrado
            </TextComponent>
          }
          ItemSeparatorComponent={() => <Divider />}
        />
      }
    </View>
  );
}

export default SearchableList;