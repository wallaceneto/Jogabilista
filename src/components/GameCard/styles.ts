import { useContext } from 'react';
import { StyleSheet } from 'react-native';

import { ThemeContext } from '../../storage/context';

const useStyles = () => {
  const {colors} = useContext(ThemeContext);
  const commonColors = colors.commonColors

  return StyleSheet.create({
    card: {
      backgroundColor: commonColors.baseGrey,
      paddingHorizontal: 12,
      paddingVertical: 8,
      marginBottom: 24,
      borderRadius: 12,
      boxShadow: '2px 2px 4px 0px rgba(0, 0, 0, 0.25)',
    },
    cardTop: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {
      fontSize: 20,
      marginLeft: 8,
    },
    infos: {
      flexDirection: 'row',
      marginTop: 4,
      marginBottom: 12,
      marginLeft: 8,
    },
    status: {
      flexDirection: 'row',
      marginRight: 24,
    },
    time: {
      flexDirection: 'row',
    },
  });
};

export default useStyles;