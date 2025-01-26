import React from 'react';
import { View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import useStyles from './styles';
import { IFilterButtonProps } from './types';

import Button from '../Button';
import TextComponent from '../Text';

const FilterButton: React.FC<IFilterButtonProps> = ({ amount, onPress }) => {
  const styles = useStyles();

  return (
    <Button onPress={onPress}>
      { amount ? 
        <View style={styles.indicator}>
          <TextComponent light weight='bold'>
            {amount}
          </TextComponent>
        </View>
      : null }

      <View style={styles.button}>
        <Ionicons name='filter' style={styles.icon}/>
      </View>
    </Button>
  );
}

export default FilterButton;