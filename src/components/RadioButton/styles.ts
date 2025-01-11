import {StyleSheet} from 'react-native';

const useStyles = (color?: string) => {

  return StyleSheet.create({
    border: {
      height: 24,
      width: 24,
      borderRadius: 12,
      borderWidth: 3,
      borderColor: color || 'blue',
      justifyContent: 'center',
      alignItems: 'center'
    },
    inside: {
      backgroundColor: color || 'blue',
      height: 12,
      width: 12,
      borderRadius: 12,
    },
  });
};

export default useStyles;