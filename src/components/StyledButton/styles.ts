import { useContext } from 'react';
import {StyleSheet} from 'react-native';

import { ThemeContext } from '../../storage/context';

const useStyles = (color?: string) => {
  const { colors } = useContext(ThemeContext);

  return StyleSheet.create({
    container: {
      backgroundColor: color || colors.primaryColor,
      borderRadius: 8,
      paddingVertical: 8,
      alignItems: 'center',
    },
  });
};

export default useStyles;