import { useContext } from 'react';
import {StyleSheet} from 'react-native';

import { ThemeContext } from '../../storage/context';

const useStyles = (open: boolean) => {
  const { colors } = useContext(ThemeContext);

  return StyleSheet.create({
    field: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderWidth: 1,
      borderTopRightRadius: 8,
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: open ? 0 : 8,
      borderBottomRightRadius: open ? 0 : 8,
    },
    fieldText: {
      fontSize: 20,
      color: colors.commonColors.darkGrey,
      marginRight: 8,
    },
    fieldIcon: {
      fontSize: 32,
      color: colors.commonColors.darkGrey,
    },
    optionsContainer: {
      borderBottomLeftRadius: 8,
      borderBottomRightRadius: 8,
      marginTop: 2,
      borderWidth: 1,
    },
    optionButton: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      paddingHorizontal: 12,
      paddingVertical: 4,
      marginBottom: 8,
    },
    optionText: {
      fontSize: 18,
    },
    optionIcon: {
      fontSize: 22,
    },
  });
};

export default useStyles;