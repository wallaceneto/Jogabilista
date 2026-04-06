import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import useStyles from './styles';
import { ISearchableListProps } from './types';
import TextComponent from '../Text';
import TextField from '../TextField';
import Button from '../Button';
import Divider from '../Divider';

const SearchableList: React.FC<ISearchableListProps> = ({ list, onItemSelect }) => {
  const styles = useStyles();
  const [searchQuery, setSearchQuery] = useState('');
  const [showItems, setShowItems] = useState(false);

  const selectItem = (item: any) => {
    onItemSelect(item);
    setShowItems(false);
    setSearchQuery('');
  }

  return (
    <View style={styles.container}>
      <TextField
        value={searchQuery}
        onTextChange={setSearchQuery}
        placeholder='Digite para pesquisar'
        onFocus={() => setShowItems(true)}
      />

      {showItems && searchQuery.length > 2 &&
        <FlatList
          style={styles.searchList}
          data={list}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) =>
            <Button
              style={styles.itemButton}
              onPress={() => selectItem(item)}
            >
              <TextComponent>{item.name}</TextComponent>
            </Button>
          }
          ItemSeparatorComponent={() => <Divider />}
        />
      }
    </View>
  );
}

export default SearchableList;