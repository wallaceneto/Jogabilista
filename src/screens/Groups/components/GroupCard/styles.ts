import { useContext } from 'react';
import { StyleSheet } from 'react-native';

import { ThemeContext } from '../../../../storage/context';

const useStyles = () => {
  const { colors } = useContext(ThemeContext);

  return StyleSheet.create({
    container: {
      backgroundColor: '#E6E6E6',
      marginBottom: 16,
      borderRadius: 10,
    },
    topContent: {
      backgroundColor: colors.commonColors.lightGrey,
      borderRadius: 10,
      padding: 16,
    },
    covers: {
      flexDirection: 'row-reverse',
      justifyContent: 'flex-end',
      marginBottom: 16,
    },
    title: {
      fontSize: 22,
    },
    bottomContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 12,
    },
    subtitle: {
      fontSize: 14,
    },
  });
};

export default useStyles;