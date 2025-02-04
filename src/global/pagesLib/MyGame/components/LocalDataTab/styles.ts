import { useContext } from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import { ThemeContext } from '../../../../../storage/context';

const useStyles = (color: string) => {
  const { colors } = useContext(ThemeContext);
  const SCREEN_WIDTH = Dimensions.get('window').width;

  return StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      width: SCREEN_WIDTH,
    },
    label: {
      flexDirection: 'row',
    },
    lableTitle: {
      marginRight: 8,
      marginBottom: 24,
    },
    scoreLabel: {
      marginRight: 8,
      marginBottom: 4,
    },
    scoreText: {
      marginLeft: 16,
    },
    platformText: {
      color: color,
    },
    deleteButton: {
      backgroundColor: colors.commonColors.score.bad,
      marginTop: 80,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    deleteIcon: {
      color: '#fff',
      marginRight: 8,
      fontSize: 24,
    },
    loading: {
      marginTop: 80,
    },
  });
};

export default useStyles;