import { useContext } from 'react';
import {StyleSheet} from 'react-native';
import { ThemeContext } from '../../storage/context';

const useStyles = () => {
  const {colors} = useContext(ThemeContext);

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      color: colors.commonColors.darkGrey,
      fontSize: 25,
    },
    text: {
      marginLeft: 12,
      fontSize: 20,
    },
  });
};

export default useStyles;