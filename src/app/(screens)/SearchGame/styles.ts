import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { ThemeContext } from '../../../storage/context';

const useStyles = () => {
  const { colors } = useContext(ThemeContext);

  return StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      backgroundColor: colors.primaryColor,
      paddingVertical: 24,
      paddingHorizontal: 16,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    icon: {
      color: colors.commonColors.baseWhite,
      fontSize: 30,
    },
  });
};

export default useStyles;