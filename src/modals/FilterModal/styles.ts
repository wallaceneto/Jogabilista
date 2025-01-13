import { useContext } from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import { ThemeContext } from '../../storage/context';

const useStyles = () => {
  const {colors} = useContext(ThemeContext);
  const WINDOW_HEIGHT = Dimensions.get('window').height;

  return StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: "rgba(0,0,0,0.6)",
      justifyContent: 'center',
    },
    container: {
      backgroundColor: colors.commonColors.baseWhite,
      borderRadius: 20,
      marginHorizontal: 20,
      height: WINDOW_HEIGHT * 0.80,
      justifyContent: 'space-between',
    },
    header: {
      backgroundColor: colors.primaryColor,
      padding: 16,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    headerText: {
      color: colors.commonColors.baseWhite,
      fontSize: 26,
    },
    headerIcon: {
      color: colors.commonColors.baseWhite,
      fontSize: 32,
    },
    loading: {
      marginTop: 40,
    },
    content: {
      paddingHorizontal: 16,
      marginTop: 40,
    },
    divider: {
      marginVertical: 20,
    },
    buttonsContainer: {
      flexDirection: 'row',
      paddingHorizontal: 16,
      marginVertical: 20,
      justifyContent: 'space-between',
    },
    buttons: {
      paddingHorizontal: 48,
    },
  });
};

export default useStyles;