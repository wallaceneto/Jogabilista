import {StyleSheet} from 'react-native';

const useStyles = (color: string) => {
  return StyleSheet.create({
    container: {
      backgroundColor: color,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: 40,
      width: 40,
      borderRadius: 30,
    },
  });
};

export default useStyles;