import React from 'react';
import { TextInput, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import useStyles from './style';
import { ISearchBarProps } from './types';

import Button from '../Button';

const SearchBar: React.FC<ISearchBarProps> = ({ 
  text,
  onChangeText,
  handleSearch,
  cleanSearch
}) => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Button onPress={() => handleSearch(text)}>
        <Ionicons
          name='search'
          style={styles.searchIcon}
        />
      </Button>

      <TextInput
        style={styles.textField}
        value={text}
        onChangeText={onChangeText}
        placeholder='Buscar'
        onSubmitEditing={() => handleSearch(text)}
      />
      
      {
        text === '' ? 
          <View style={styles.emptyCloseIcon} /> 
        :
        <Button
          onPress={() => cleanSearch()}
        >
          <Ionicons
            name='close'
            style={styles.searchIcon}
          />
        </Button>
      }
    </View>
  );
}

export default SearchBar;