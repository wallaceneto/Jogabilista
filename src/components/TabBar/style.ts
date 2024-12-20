import { useContext } from 'react';
import {StyleSheet} from 'react-native';

import { ThemeContext } from '../../storage/context';

const useStyles = () => {
  const {colors} = useContext(ThemeContext);

  return StyleSheet.create({
    container: {
      width: '100%',
      position: 'absolute',
      bottom: 0,
      paddingTop: 16,
    },
    bar: {
      flexDirection: 'row',
      backgroundColor: colors.primaryColor,
      paddingVertical: 8,
      justifyContent: 'space-evenly',
    },
    addButton: {
      backgroundColor: colors.primaryColor,
      padding: 4,
      borderRadius: 40,
      borderColor: colors.commonColors.baseWhite,
      borderWidth: 3,
      top: -30,
    },
    addIcon: {
      fontSize: 52,
      color: colors.commonColors.baseWhite,
    },
    tabButton: {
      alignItems: 'center',
    },
    unselectedTab: {
      color: colors.commonColors.opacityWhite,
    },
    selectedTab: {
      color: colors.commonColors.baseWhite,
    },
  });
};

export default useStyles;