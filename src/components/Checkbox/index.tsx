import React, { useContext, useState } from 'react';

import useStyles from './styles';
import { ICheckboxProps } from './types/ICheckboxProps';
import { ThemeContext } from '../../storage/context';
import Button from '../Button';
import TextComponent from '../Text';
import Checkbox from 'expo-checkbox';

const CheckboxComponent: React.FC<ICheckboxProps> = ({ text, checked, style, check, uncheck }) => {
  const styles = useStyles();
  const { colors } = useContext(ThemeContext);
  const [isChecked, setChecked] = useState(checked || false);

  const toggleCheckbox = (value: boolean) => {
    if (value) {
      setChecked(true);
      if (check) check();
    } else {
      setChecked(false);
      if (uncheck) uncheck();
    }
  }

  return (
    <Button style={[styles.container, style]} onPress={() => toggleCheckbox(!isChecked)}>
      <Checkbox
        value={isChecked}
        onValueChange={() => toggleCheckbox(!isChecked)}
        color={isChecked ? colors.primaryColor : undefined}
      />

      <TextComponent style={styles.text}>
        {text}
      </TextComponent>
    </Button>
  );
}

export default CheckboxComponent;