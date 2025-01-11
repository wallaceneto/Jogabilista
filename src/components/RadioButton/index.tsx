import React, { useState } from 'react';
import { View } from 'react-native';

import useStyles from './styles';
import Button from '../Button';
import { IRadioButtonProps } from './types';

const RadioButton: React.FC<IRadioButtonProps> = ({ pressed, setPressed, color }) => {
  const style = useStyles(color);

  return (
    <Button
      style={style.border}
      onPress={() => setPressed(!pressed)}
    >
      { pressed ? <View style={style.inside} /> : null}
    </Button>
  );
}

export default RadioButton;