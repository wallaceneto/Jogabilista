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
      paddingHorizontal: 20,
      marginTop: 24,
    },
    field: {
      marginBottom: 24,
    },
    fieldInput: {
      marginTop: 16,
    },
    numberField: {
      marginHorizontal: 8,
    },
    rowField: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginBottom: 24,
    },
    scores: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    scoreLabel: {
      marginTop: 16,
      marginRight: 4,
    },
    button: {
      marginVertical: 32,
    },
  });
};

export default useStyles;