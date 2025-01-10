import React, { useContext } from 'react';
import { ActivityIndicator } from 'react-native';

import { ILoadingIndicatorProps } from './types';

import { ThemeContext } from '../../storage/context';

const LoadingIndicator: React.FC<ILoadingIndicatorProps> = ({ style }) => {
  const { colors } = useContext(ThemeContext);

  return <ActivityIndicator
    size='large'
    color={colors.primaryColor}
    style={style}  
  />;
}

export default LoadingIndicator;