import React, { useContext } from 'react';
import { ActivityIndicator } from 'react-native';

import { ThemeContext } from '../../storage/context';
import { ILoadingIndicatorProps } from './types';

const LoadingIndicator: React.FC<ILoadingIndicatorProps> = ({ style }) => {
  const { colors } = useContext(ThemeContext);

  return <ActivityIndicator
    size='large'
    color={colors.primaryColor}
    style={style}  
  />;
}

export default LoadingIndicator;