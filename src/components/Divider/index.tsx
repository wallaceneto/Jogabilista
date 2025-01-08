import React from 'react';
import { View } from 'react-native';

import useStyles from './styles';
import { IDividerProps } from './types';

const Divider: React.FC<IDividerProps> = ({ style }) => {
  const styles = useStyles();

  return <View style={[styles.container, style]} />;
}

export default Divider;