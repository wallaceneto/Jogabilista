import { useContext } from 'react';
import {StyleSheet} from 'react-native';

import { ThemeContext } from '../../storage/context';

const useStyles = () => {
  const { colors } = useContext(ThemeContext);

  return StyleSheet.create({
    container: {
      backgroundColor: colors.commonColors.backgroundColor,
      borderWidth: 1,
      borderRadius: 12,
      paddingLeft: 8,
      borderColor: colors.commonColors.baseBlack,
    },
  });
};

export default useStyles;