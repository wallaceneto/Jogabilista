import { useContext } from 'react';
import { StyleSheet } from 'react-native';

import { ThemeContext } from '../../../../storage/context';

const useStyles = () => {
  const { colors } = useContext(ThemeContext);

  return StyleSheet.create({
    container: {
      paddingVertical: 12,
      paddingLeft: 8,
      borderBottomWidth: 1,
      borderColor: colors.commonColors.dividerColor,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    text: {},
    icon: {
      fontSize: 24,
      color: 'red',
    },
  });
};

export default useStyles;