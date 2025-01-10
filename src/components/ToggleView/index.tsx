import React from 'react';
import { View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import useStyles from './styles';
import { IToggleViewProps } from './types';

import Button from '../Button';
import TextComponent from '../Text';

const ToggleView: React.FC<IToggleViewProps> = ({ text, isPressed, setIsPressed, children }) => {
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

export default ToggleView;