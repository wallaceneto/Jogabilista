import {Dimensions, StyleSheet} from 'react-native';

const useStyles = () => {
  const SCREEN_WIDTH = Dimensions.get('window').width;

  return StyleSheet.create({
    container: {
      width: SCREEN_WIDTH,
      paddingHorizontal: 16,
    },
    warnText: {
      textAlign: 'center',
      alignSelf: 'center',
    },
  });
};

export default useStyles;