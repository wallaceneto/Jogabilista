import { useContext } from 'react';
import {StyleSheet} from 'react-native';

import { ThemeContext } from '../../../../storage/context';

const useStyles = () => {
  const { colors } = useContext(ThemeContext);

  return StyleSheet.create({
    container: {
      backgroundColor: colors.commonColors.backgroundColor,
      borderColor: colors.commonColors.dividerColor,
      borderWidth: 1,
      borderRadius: 4,
      paddingLeft: 8,
      flexDirection: 'row',
    },
    label: {
      position: 'absolute',
      marginTop: -14,
      marginLeft: 8,
      backgroundColor: colors.commonColors.backgroundColor,
      paddingHorizontal: 4,
    },
    text: {
      fontFamily: 'Quicksand_500Medium',
      color: colors.commonColors.baseBlack,
      fontSize: 18,
      width: '70%',
      textAlign: 'right',
      paddingRight: 16,
    },
    verticalDivider: {
      height: '100%',
      width: 1,
      backgroundColor: colors.commonColors.dividerColor,
    },
    timeUnit: {
      flexDirection: 'row',
      width: '30%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    timeUnitIcon: {
      fontSize: 20,
      marginLeft: 4,
      marginTop: 4,
    },
  });
};

export default useStyles;