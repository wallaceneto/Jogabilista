import { useContext } from 'react';
import {StyleSheet} from 'react-native';

import { ThemeContext } from '../../storage/context';

const useStyles = () => {
  const { colors } = useContext(ThemeContext);

  return StyleSheet.create({
    container: {
      backgroundColor: colors.commonColors.backgroundColor,
      borderWidth: 1,
      borderRadius: 4,
      borderColor: colors.commonColors.dividerColor,
      paddingLeft: 8,
    },
    text: {
      fontSize: 18,
      fontFamily: 'Quicksand_500Medium',
      color: colors.commonColors.baseBlack,
    },
    error: {
      borderColor: 'red',
    },
    errorText: {
      color: 'orange',
      marginLeft: 8,
    },
  });
};

export default useStyles;