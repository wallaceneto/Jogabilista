import React from 'react';
import Button from '../Button';

import useStyles from './styles';
import { IRoundedButtonProps } from './types';

const RoundedButton: React.FC<IRoundedButtonProps> = ({ onPress, children }) => {
  const styles = useStyles();

  return (
    <Button style={styles.container} onPress={onPress}>
      {children}
    </Button>
  );
}

export default RoundedButton;