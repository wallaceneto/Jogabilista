import React from 'react';
import { TextInput, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import useStyles from './styles';
import { ITimeFieldProps } from './types';
import { handleChangeText, toggleTimeUnit } from './lib';

import TextComponent from '../../../../../components/Text';
import Button from '../../../../../components/Button';

const TimeField: React.FC<ITimeFieldProps> = ({ value, onTextChange, timeUnit, setTimeUnit }) => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <TextComponent style={styles.label}>
        Tempo de jogo
      </TextComponent>

      <TextInput
        style={styles.text}
        value={value}
        onChangeText={(text: string) => handleChangeText(text, onTextChange)}
        keyboardType='number-pad'
      />

      <View style={styles.verticalDivider} />

      <Button
        style={styles.timeUnit}
        onPress={() => toggleTimeUnit(timeUnit, setTimeUnit)}
      >
        <TextComponent weight='medium'>
          {timeUnit === 'hr' ? 'horas' : 'minutos'}
        </TextComponent>
        <Ionicons
          name='time-outline'
          style={styles.timeUnitIcon}
        />
      </Button>
    </View>
  );
}

export default TimeField;