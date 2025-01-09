import React from 'react';
import { TouchableOpacity } from 'react-native';

import { IButtonProps } from './types';

const Button: React.FC<IButtonProps> = ({ children, style, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={style}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
}

export default Button;