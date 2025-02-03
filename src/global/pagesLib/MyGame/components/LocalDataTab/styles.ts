import {Dimensions, StyleSheet} from 'react-native';

const useStyles = (color: string) => {
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
    platformText: {
      color: color,
    },
    scoreText: {
      marginRight: 8,
    },
    deleteButton: {
      marginTop: 80,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    deleteIcon: {
      color: '#fff',
      marginRight: 8,
      fontSize: 24,
    },
  });
};

export default useStyles;