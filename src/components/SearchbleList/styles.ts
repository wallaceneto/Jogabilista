import { useContext } from 'react';
import {StyleSheet} from 'react-native';
import { ThemeContext } from '../../storage/context';

const useStyles = () => {
  const {colors} = useContext(ThemeContext);

  return StyleSheet.create({
    container: {
    },
    searchList: {
      height: 120,
      borderBottomLeftRadius: 4,
      borderBottomRightRadius: 4,
      borderWidth: 1,
      borderTopWidth: 0,
      borderColor: colors.commonColors.dividerColor,
    },
    itemButton: {
      paddingVertical: 8,
      paddingLeft: 4,
    },
  });
};

export default useStyles;