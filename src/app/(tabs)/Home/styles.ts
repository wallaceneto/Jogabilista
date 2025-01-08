import { useContext } from 'react';
import {StyleSheet} from 'react-native';

import { ThemeContext } from '../../../storage/context';

const useStyles = () => {
  const {colors} = useContext(ThemeContext);

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.commonColors.backgroundColor,
    },
    loading: {
      alignSelf: 'center',
      marginTop: 80,
    },
    search: {
      padding: 16,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    title: {
      fontSize: 20,
      marginBottom: 16,
    },
    content: {
      paddingHorizontal: 12,
      marginBottom: 220
    },
  });
};

export default useStyles;