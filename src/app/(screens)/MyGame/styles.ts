import { useContext } from 'react';
import {StyleSheet} from 'react-native';

import { ThemeContext } from '../../../storage/context';

const useStyles = () => {
  const { colors } = useContext(ThemeContext);

  return StyleSheet.create({
    errorMsg: {
      fontSize: 24,
      marginTop: 80,
      alignSelf: 'center',
    },
    loading: {
      alignSelf: 'center',
      marginTop: 80,
    },
    container: {
      flex: 1,
      backgroundColor: colors.commonColors.backgroundColor,
    },
    header: {
      padding: 16,
      backgroundColor: colors.primaryColor,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    icon: {
      fontSize: 30,
      color: colors.commonColors.baseWhite,
    },
    gameCover: {
      width: 160,
      height: 200,
      borderRadius: 8,
      backgroundColor: 'rgba(242,242,242,0.8)',
      marginTop: 56,
      marginBottom: 32,
      padding: 16,
    },
    syncGame: {
      height: '100%',
      borderRadius: 8,
      backgroundColor: colors.commonColors.lightGrey,
      justifyContent: 'center',
      alignItems: 'center',
    },
    syncGameIcon: {
      color: colors.commonColors.baseBlack,
      fontSize: 48,
    },
    scoreTag: {
      alignSelf: 'flex-end',
      marginRight: 16,
      marginTop: -24,
    },
    gameTitle: {
      fontSize: 24,
      marginLeft: 16,
    },
    tabContainer: {
      flexDirection: 'row',
      marginTop: 24,
    },
    tabButton: {
      width: '50%',
      paddingVertical: 8,
      alignItems: 'center',
    },
    tabButtonSelected: {
      borderBottomWidth: 3,
      borderBottomColor: colors.primaryColor,
    },
  });
};

export default useStyles;