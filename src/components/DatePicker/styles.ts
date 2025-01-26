import { useContext } from 'react';
import {StyleSheet} from 'react-native';

import { ThemeContext } from '../../storage/context';

const useStyles = () => {
  const { colors } = useContext(ThemeContext);

  return StyleSheet.create({
    container: {
      backgroundColor: colors.commonColors.backgroundColor,
      borderColor: colors.commonColors.dividerColor,
      borderWidth: 1,
      borderRadius: 4,
      padding: 16,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    label: {
      position: 'absolute',
      marginTop: -14,
      marginLeft: 8,
      backgroundColor: colors.commonColors.backgroundColor,
      paddingHorizontal: 4,
    },
    icon: {
      fontSize: 25,
      marginLeft: 8,
    },
  });
};

export default useStyles;