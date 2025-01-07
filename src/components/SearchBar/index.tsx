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
  const style = useStyles();

  return (
    <View style={style.container}>
      <Button onPress={() => handleSearch(text)}>
        <Ionicons
          name='search'
          style={style.searchIcon}
        />
      </Button>

      <TextInput
        style={style.textField}
        value={text}
        onChangeText={onChangeText}
        placeholder='Buscar'
        onSubmitEditing={() => handleSearch(text)}
      />
      
      {
        text === '' ? 
          <View style={style.emptyCloseIcon} /> 
        :
        <Button
          onPress={() => cleanSearch()}
        >
          <Ionicons
            name='close'
            style={style.searchIcon}
          />
        </Button>
      }
    </View>
  );
}

export default SearchBar;