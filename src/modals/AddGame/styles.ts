import { useContext } from 'react';
import {StyleSheet} from 'react-native';

import { ThemeContext } from '../../storage/context';

const useStyles = () => {
  const { colors } = useContext(ThemeContext);

  return StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: colors.commonColors.backgroundColor,
    },
    header: {
      backgroundColor: colors.primaryColor,
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingVertical: 32,
    },
    headerTitle: {
      fontSize: 31,
      color: colors.commonColors.baseWhite,
    },
    headerIcon: {
      fontSize: 31,
      color: colors.commonColors.baseWhite,
    },
    content: {
      paddingHorizontal: 16,
      marginVertical: 16,
    },
    lable: {
      marginLeft: 4,
      marginBottom: 16,
      fontSize: 18,
    },
    field: {
      marginBottom: 24,
    },
  });
};

export default useStyles;