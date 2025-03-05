import { useContext } from 'react';
import {StyleSheet} from 'react-native';

import { ThemeContext } from '../../storage/context';

const useStyles = () => {
  const {colors} = useContext(ThemeContext);

  return StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: colors.commonColors.lightGrey,
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
    section: {
      paddingHorizontal: 11,
      marginBottom: 16,
    },
    sectionTitle: {
      fontSize: 20,
      marginLeft: 5,
    },
  });
};

export default useStyles;