import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { ThemeContext } from '../../storage/context';

const useStyles = () => {
  const { colors } = useContext(ThemeContext);

  return StyleSheet.create({
    container: {
      flex: 1,
    },
    loading: {
      marginTop: 80,
    },
    header: {
      backgroundColor: colors.primaryColor,
      paddingVertical: 24,
      paddingHorizontal: 16,
    },
    headerSearch: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    headerButton: {
      backgroundColor: 'rgba(250,250,250,0.5)',
      alignItems: 'center',
      marginTop: 16,
      paddingVertical: 8,
      borderRadius: 8,
    },
    icon: {
      color: colors.commonColors.baseWhite,
      fontSize: 30,
    },
    content: {
      flex: 1,
      justifyContent: 'center',
    },
    title: {
      fontSize: 24,
      textAlign: 'center',
      marginBottom: 80,
    },
  });
};

export default useStyles;