import { useContext } from 'react';
import {StyleSheet} from 'react-native';

import { ThemeContext } from '../../storage/context';

const useStyles = (open: boolean) => {
  const { colors } = useContext(ThemeContext);

  return StyleSheet.create({
    field: {
      backgroundColor: colors.commonColors.backgroundColor,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderWidth: 1,
      borderColor: colors.commonColors.dividerColor,
      borderTopRightRadius: 4,
      borderTopLeftRadius: 4,
      borderBottomLeftRadius: open ? 0 : 4,
      borderBottomRightRadius: open ? 0 : 4,
    },
    fieldText: {
      fontSize: 18,
      color: colors.commonColors.baseBlack,
      marginRight: 8,
    },
    fieldIcon: {
      fontSize: 32,
      color: colors.commonColors.darkGrey,
    },
    optionsContainer: {
      backgroundColor: colors.commonColors.backgroundColor,
      borderBottomLeftRadius: 4,
      borderBottomRightRadius: 4,
      marginTop: 2,
      borderWidth: 1,
      borderColor: colors.commonColors.dividerColor,
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