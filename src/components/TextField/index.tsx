import React, { useContext } from 'react';
import { TextInput, View } from 'react-native';

import useStyles from './styles';
import { ThemeContext } from '../../storage/context';
import { ITextFieldProps } from './types';
import TextComponent from '../Text';

const TextField: React.FC<ITextFieldProps> = ({
  value,
  onTextChange,
  placeholder,
  maxCharacters,
  type,
  errorMsg,
}) => {
  const styles = useStyles();
  const { colors } = useContext(ThemeContext);

  return (
    <View>
      <View style={[styles.container, errorMsg ? styles.error : null]}>
        <TextInput
          style={styles.text}
          value={value}
          onChangeText={onTextChange}
          cursorColor={colors.primaryColor}
          placeholder={placeholder}
          maxLength={maxCharacters}
          keyboardType={type}
        />
      </View>

      {maxCharacters && value.length >= maxCharacters ?
        <TextComponent style={styles.warnText}>
          Máximo de {maxCharacters} caracteres
        </TextComponent>
        : null}

      {errorMsg ?
        <TextComponent style={styles.errorText}>
          {errorMsg}
        </TextComponent>
        : null}
    </View>
  );
}

export default TextField;