import React from 'react';
import { View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import useStyles from './styles';
import { IToggleViewProps } from './types';

import Button from '../Button';
import TextComponent from '../Text';

const ToggleView: React.FC<IToggleViewProps> = ({ text, isPressed, setIsPressed, children }) => {
  const styles = useStyles();

  return (
    <View>
      <Button
        style={styles.container}
        onPress={() => setIsPressed(!isPressed)}
      >
        <Ionicons
          name={isPressed ? 'caret-down-outline' :'caret-forward-outline' }
          style={styles.icon}
        />

        <TextComponent
          weight='semibold'
          style={styles.text}
        >
          {text}
        </TextComponent>
      </Button>

      {isPressed ? children : null}
    </View>
  );
}

export default ToggleView;