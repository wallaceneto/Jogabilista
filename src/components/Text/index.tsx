import React from 'react';
import { Text, View } from 'react-native';

import useStyles from './styles';
import { ITextComponentProps } from './types';

const TextComponent: React.FC<ITextComponentProps> = ({ 
  children,
  style,
  size, 
  light,
  weight
}) => {
  const styles = useStyles({size, light, weight});

  return (
    <Text style={[styles.text, style]}>
      {children}
    </Text>
  );
}

export default TextComponent;