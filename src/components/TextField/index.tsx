import React, { useContext } from 'react';
import { TextInput, View } from 'react-native';

import useStyles from './styles';
import { ThemeContext } from '../../storage/context';
import { ITextFieldProps } from './types';
import TextComponent from '../Text';

const TextField: React.FC<ITextFieldProps> = ({
  text,
  onTextChange,
  placeholder,
  maxCharacters,
}) => {
  const styles = useStyles();
  const { colors } = useContext(ThemeContext);

  return (
    <View>
      <View style={styles.container}>
        <TextInput
          style={styles.text}
          value={text}
          onChangeText={onTextChange}
          cursorColor={colors.primaryColor}
          placeholder={placeholder}
          maxLength={maxCharacters}
        />
      </View>
      
      {maxCharacters && text.length >= maxCharacters ?
        <TextComponent style={styles.errorText}>
          Máximo de {maxCharacters} caracteres
        </TextComponent>
      : null}
    </View>
  );
}

export default TextField;