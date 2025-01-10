import { useContext } from 'react';
import {StyleSheet} from 'react-native';

import { ThemeContext } from '../../storage/context';

const useStyles = () => {
  const {colors} = useContext(ThemeContext);

  return StyleSheet.create({
    button: {
      backgroundColor: colors.commonColors.backgroundColor,
      padding: 8,
      borderWidth: 1,
      borderRadius: 8,
    },
    icon: {
      fontSize: 24,
      color: colors.commonColors.textColor,
    },
    indicator: {
      backgroundColor: colors.primaryColor,
      alignItems: 'center',
      justifyContent: 'center',
      height: 30,
      width: 30,
      borderRadius: 30,
      position: 'absolute',
      zIndex: 1,
      marginLeft: 28,
      marginTop: -12,
    },
  });
};

export default useStyles;