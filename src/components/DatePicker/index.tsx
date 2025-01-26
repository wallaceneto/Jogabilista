import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import moment from 'moment';
import 'moment/locale/pt-br';

import useStyles from './styles';
import { IDatePickerProps } from './types';
import { showMode } from './lib';

import TextComponent from '../Text';
import Button from '../Button';

const DatePicker: React.FC<IDatePickerProps> = ({ label, value, setValue }) => {
  const styles = useStyles();

  return (
    <Button
      style={styles.container}
      onPress={() => showMode(value, setValue)}
    >
      <TextComponent style={styles.label} weight='medium'>
        {label}
      </TextComponent>

      <TextComponent size={18}>
        {value ? moment(value).format('L') : 'Inserir data'}
      </TextComponent>

      {!value ?
        <Ionicons
          name='calendar-outline'
          size={25}
          style={styles.icon}
        />
        :
        <Button onPress={() => setValue('')}>
          <Ionicons
            name='close'
            style={styles.icon}
          />
        </Button>
      }
    </Button>
  );
}

export default DatePicker;