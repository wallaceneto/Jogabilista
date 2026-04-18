import { useContext } from 'react';
import { StyleSheet } from 'react-native';

import { ThemeContext } from '../../storage/context';

const useStyles = () => {
  const { colors } = useContext(ThemeContext);

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.commonColors.backgroundColor,
    },
    content: {
      flex: 1,
      paddingHorizontal: 12,
    },
    title: {
      fontSize: 20,
      marginVertical: 8,
    },
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 16,
      marginBottom: 8,
    },
    buttonText: {
      color: colors.commonColors.baseWhite,
      fontSize: 18,
    },
    buttonIcon: {
      color: colors.commonColors.baseWhite,
      fontSize: 24,
      marginHorizontal: 16,
    },
    groupList: {
      flex: 1,
      marginBottom: 80,
    },
    emptyList: {
      marginTop: 108,
      alignItems: 'center'
    },
    emptyListIcon: {
      fontSize: 60,
    },
    emptyListText: {
      fontSize: 24,
    },
  });
};

export default useStyles;