import React, { useContext, useState } from 'react';
import { TextInput } from 'react-native';

import useStyles from './styles';
import { ThemeContext } from '../../storage/context';
import { ITextFieldProps } from './types';

const TextField: React.FC<ITextFieldProps> = ({ text, onTextChange, placeholder }) => {
  const styles = useStyles();
  const { colors } = useContext(ThemeContext);

  return (
    <TextInput
      style={styles.container}
      value={text}
      onChangeText={onTextChange}
      cursorColor={colors.primaryColor}
      placeholder={placeholder}
    />
  );
}

export default TextField;