import React from 'react';
import { View } from 'react-native';

import useStyles from './styles';
import { IThemeButtonProps } from './types';

import Button from '../../../../../components/Button';
import TextComponent from '../../../../../components/Text';
import RadioButton from '../../../../../components/RadioButton';

const ThemeButton: React.FC<IThemeButtonProps> = ({ text, color, current, setCurrent }) => {
  const styles = useStyles();

  return (
    <Button
      onPress={() => setCurrent(color.colorName)}
      style={styles.container}
    >
      <View style={styles.leftSide}>
        <View style={[styles.colorPreview, { backgroundColor: color.colorHex }]} />

        <TextComponent style={styles.text} weight='medium'>
          {text}
        </TextComponent>
      </View>

      <RadioButton
        pressed={current === color.colorName}
        setPressed={() => setCurrent(color.colorName)}
        color={color.colorHex}
      />
    </Button>
  );
}

export default ThemeButton;