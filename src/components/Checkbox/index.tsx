import React, { useContext, useState } from 'react';
import Checkbox from 'expo-checkbox';

import useStyles from './styles';
import { ICheckboxProps } from './types';
import { toggleCheckbox } from './lib';

import Button from '../Button';
import TextComponent from '../Text';
import { ThemeContext } from '../../storage/context';

const CheckboxComponent: React.FC<ICheckboxProps> = ({ text, checked, style, checkAction, uncheckAction }) => {
  const styles = useStyles();
  const { colors } = useContext(ThemeContext);
  const [isChecked, setChecked] = useState(checked || false);

  return (
    <Button 
      style={[styles.container, style]}
      onPress={() => toggleCheckbox(!isChecked, setChecked, checkAction, uncheckAction)}
    >
      <Checkbox
        value={isChecked}
        onValueChange={() => toggleCheckbox(!isChecked, setChecked, checkAction, uncheckAction)}
        color={isChecked ? colors.primaryColor : undefined}
      />

      <TextComponent style={styles.text}>
        {text}
      </TextComponent>
    </Button>
  );
}

export default CheckboxComponent;