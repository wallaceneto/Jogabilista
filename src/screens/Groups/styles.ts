import { useContext } from 'react';
import { StyleSheet } from 'react-native';

import { ThemeContext } from '../../storage/context';

const useStyles = () => {
  const { colors } = useContext(ThemeContext);

  return StyleSheet.create({
    container: {
      backgroundColor: colors.commonColors.backgroundColor,
    },
    content: {
      paddingHorizontal: 12,
      marginBottom: 220
    },
    title: {
      fontSize: 20,
      marginVertical: 8,
    },
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 16,
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
      height: '72%',
    }
  });
};

export default useStyles;