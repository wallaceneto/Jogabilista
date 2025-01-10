import { useContext } from 'react';
import {StyleSheet} from 'react-native';

import { ThemeContext } from '../../storage/context';

const useStyles = () => {
  const {colors} = useContext(ThemeContext);

  return StyleSheet.create({
    container: {
      backgroundColor: colors.commonColors.dividerColor,
      height: 2,
      borderRadius: 8,
    },
  });
};

export default useStyles;