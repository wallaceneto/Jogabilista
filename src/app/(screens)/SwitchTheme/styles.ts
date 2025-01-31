import { useContext } from 'react';
import {StyleSheet} from 'react-native';

import { ThemeContext } from '../../../storage/context';

const useStyles = () => {
  const {colors} = useContext(ThemeContext);

  return StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: colors.commonColors.lightGrey,
      justifyContent: 'space-between'
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 4,
      margin: 16,
    },
    headerText: {
      fontSize: 24,
      marginLeft: 12,
      paddingBottom: 2,
    },
    content: {
      marginHorizontal: 16,
      marginVertical: 32,
    },
    button: {
      marginVertical: 32,
      marginHorizontal: 16,
    },
  });
};

export default useStyles;