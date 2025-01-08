import React from 'react';
import { View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import useStyles from './styles';
import Button from '../Button';
import TextComponent from '../Text';
import { IToggleButtonProps } from './types';

const ToggleButton: React.FC<IToggleButtonProps> = ({ text, isPressed, setIsPressed, children }) => {
  const style = useStyles();

  return (
    <View>
      <Button
        style={style.container}
        onPress={() => setIsPressed(!isPressed)}
      >
        <Ionicons
          name={isPressed ? 'caret-down-outline' :'caret-forward-outline' }
          style={style.icon}
        />

        <TextComponent
          weight='semibold'
          style={style.text}
        >
          {text}
        </TextComponent>
      </Button>

      {isPressed ? children : null}
    </View>
  );
}

export default ToggleButton;