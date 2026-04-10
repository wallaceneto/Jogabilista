import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { ThemeContext } from '../../../../storage/context';

const useStyles = () => {
  const { colors } = useContext(ThemeContext);

  return StyleSheet.create({
    container: {
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
    loading: {
      marginVertical: 40,
    },
    content: {
      paddingHorizontal: 16,
      marginVertical: 16,
    },
    label: {
      marginLeft: 4,
      marginVertical: 16,
      fontSize: 18,
    },
    selectedGamesContainer: {
      marginVertical: 16,
    },
    selectedGames: {
      marginBottom: 16,
      maxHeight: 180,
    },
    deleteButton: {
      marginVertical: 24,
      backgroundColor: colors.commonColors.backgroundColor,
      borderWidth: 3,
      borderColor: colors.commonColors.score.bad,
    },
    deleteText: {
      color: colors.commonColors.score.bad,
    },
  });
};

export default useStyles;