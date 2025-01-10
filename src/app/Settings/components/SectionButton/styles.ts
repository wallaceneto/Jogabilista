import { useContext } from 'react';
import {StyleSheet} from 'react-native';

import { ThemeContext } from '../../../../storage/context';

const useStyles = (warning: boolean) => {
  const { colors } = useContext(ThemeContext);

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: colors.commonColors.baseWhite,
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 12,
      marginVertical: 16,
    },
    leftSide: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    text: {
      color: warning ? 'red' : colors.commonColors.baseBlack,
      fontSize: 20,
      marginLeft: 12,
    },
    warningContent: {
      color: warning ? 'red' : colors.commonColors.baseBlack,
    },
  });
};

export default useStyles;