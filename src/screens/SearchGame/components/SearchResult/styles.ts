import { useContext } from 'react';
import {StyleSheet} from 'react-native';
import { ThemeContext } from '../../../../storage/context';

const useStyles = () => {
  const { colors } = useContext(ThemeContext);

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 24,
      paddingVertical: 16,
    },
    imageContainer: {
      backgroundColor: colors.commonColors.darkGrey,
      marginRight: 12,
      width: 116,
      height: 58,
      borderRadius: 4,
    },
    image: {
      width: 120,
      height: 160,
      marginRight: 12,
      resizeMode: 'contain',
      borderRadius: 4,
    },
    loading: {
      height: 58,
      color: colors.primaryColor,
    },
    title: {
      width: '60%',
    },
  });
};

export default useStyles;