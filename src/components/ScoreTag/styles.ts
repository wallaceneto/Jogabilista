import {StyleSheet} from 'react-native';

const useStyles = (color: string) => {
  return StyleSheet.create({
    container: {
      backgroundColor: color,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: 50,
      width: 50,
      borderRadius: 30,
    },
    text: {
      color: '#fff',
      fontSize: 18,
    }
  });
};

export default useStyles;