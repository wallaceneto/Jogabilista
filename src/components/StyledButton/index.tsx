import React from 'react';

import useStyles from './styles';
import { IStyledButtonProps } from './types';
import Button from '../Button';

const StyledButton: React.FC<IStyledButtonProps> = ({ children, onPress, color, style }) => {
  const styles = useStyles(color);

  return (
    <Button
      style={[styles.container, style]}
      onPress={onPress}
    >
      {children}
    </Button>
  );
}

export default StyledButton;