import React from 'react';
import { View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import useStyles from './styles';
import { IFilterButtonProps } from './types';

import Button from '../Button';
import TextComponent from '../Text';

const FilterButton: React.FC<IFilterButtonProps> = ({ amount, onPress }) => {
  const style = useStyles();

  return (
    <Button onPress={onPress}>
      { amount ? 
        <View style={style.indicator}>
          <TextComponent light weight='bold'>
            {amount}
          </TextComponent>
        </View>
      : null }

      <View style={style.button}>
        <Ionicons name='filter' style={style.icon}/>
      </View>
    </Button>
  );
}

export default FilterButton;