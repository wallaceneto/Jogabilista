import React from 'react';
import { View } from 'react-native';

import useStyles from './styles';
import { IRadioButtonProps } from './types';

import Button from '../Button';

const RadioButton: React.FC<IRadioButtonProps> = ({ pressed, setPressed, color }) => {
  const styles = useStyles(color);

  return (
    <Button
      style={styles.border}
      onPress={() => setPressed(!pressed)}
    >
      { pressed ? <View style={styles.inside} /> : null}
    </Button>
  );
}

export default RadioButton;