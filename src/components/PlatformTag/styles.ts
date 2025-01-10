import {StyleSheet} from 'react-native';

const useStyles = (color: string) => {

  return StyleSheet.create({
    tag: {
      backgroundColor: color,
      paddingHorizontal: 8,
      paddingVertical:4,
      borderRadius: 10,
    },
  });
};

export default useStyles;