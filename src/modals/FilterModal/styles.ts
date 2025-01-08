import { useContext } from 'react';
import {StyleSheet} from 'react-native';
import { ThemeContext } from '../../storage/context';

const useStyles = () => {
  const {colors} = useContext(ThemeContext);

  return StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: "rgba(0,0,0,0.6)",
    },
    container: {
      backgroundColor: colors.commonColors.baseWhite,
      borderRadius: 20,
      marginHorizontal: 20,
      marginVertical: 40,
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
    content: {
      paddingHorizontal: 16,
      marginVertical: 45,
    },
    divider: {
      marginVertical: 16,
    },
    buttonsContainer: {
      flexDirection: 'row',
      paddingHorizontal: 16,
      marginVertical: 20,
      justifyContent: 'space-between',
    },
    cleanButton: {
      backgroundColor: colors.commonColors.lightGrey,
      borderRadius: 8,
      paddingVertical: 8,
      paddingHorizontal: 48,
    },
    applyButton: {
      backgroundColor: colors.primaryColor,
      borderRadius: 8,
      paddingVertical: 8,
      paddingHorizontal: 48,
    },
  });
};

export default useStyles;