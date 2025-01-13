import React from 'react';
import { View } from 'react-native';

import useStyles from './styles';
import { IThemeButtonProps } from './types';

import Button from '../../../../../components/Button';
import TextComponent from '../../../../../components/Text';
import RadioButton from '../../../../../components/RadioButton';

const ThemeButton: React.FC<IThemeButtonProps> = ({ text, color, current, setCurrent }) => {
  const style = useStyles();

  return (
    <Button
      onPress={() => setCurrent(color.colorName)}
      style={style.container}
    >
      <View style={style.leftSide}>
        <View style={[style.colorPreview, { backgroundColor: color.colorHex }]} />

        <TextComponent style={style.text} weight='medium'>
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