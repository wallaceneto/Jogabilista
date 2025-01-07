import { useContext } from 'react';
import {StyleSheet} from 'react-native';
import { ThemeContext } from '../../storage/context';

const useStyles = () => {
  const {colors} = useContext(ThemeContext);

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: colors.commonColors.backgroundColor,
      borderWidth: 1,
      borderColor: colors.commonColors.darkGrey,
      borderRadius: 8,
      paddingHorizontal: 8,
      alignItems: 'center',
    },
    searchIcon: {
      fontSize: 23,
      color: colors.commonColors.darkGrey,
    },
    emptyCloseIcon: {
      width: 23,
    },
    textField: {
      width: 250,
      color: colors.commonColors.textColor,
      marginLeft: 4,
    },
  });
};

export default useStyles;