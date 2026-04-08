import { useContext } from 'react';
import {StyleSheet} from 'react-native';

import { ThemeContext } from '../../storage/context';

const useStyles = () => {
  const { colors } = useContext(ThemeContext);

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.commonColors.backgroundColor,
    },
    content: {
      paddingHorizontal: 16, 
    },
    title: {
      fontSize: 24,
      marginTop: 24,
    },
    actionContainer: {
      marginVertical: 24,
      flexDirection: 'row',
      gap: 16,
    },
    flatButton: {
      borderWidth: 1,
      borderColor: colors.commonColors.darkGrey,
      borderRadius: 8,
      paddingHorizontal: 10,
      paddingVertical: 8,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    flatButtonIcon: {
      fontSize: 18,
    },
    flatButtonText: {
      
    },
    list: {
    },
    emptyText: {
      fontSize: 20,
      textAlign: 'center',
    },
  });
};

export default useStyles;