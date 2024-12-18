import { useContext } from 'react';
import {StyleSheet} from 'react-native';

import { ThemeContext } from '../../storage/context';

const useStyles = () => {
  const {colors} = useContext(ThemeContext);

  return StyleSheet.create({
    container: {
      backgroundColor: colors.primaryColor,
      paddingVertical: 40,
      borderEndEndRadius: 58,
    },
    title: {
      color: colors.commonColors.baseWhite,
      fontSize: 36,
      marginLeft: 12,
    },
  });
};

export default useStyles;