import {StyleSheet} from 'react-native';

const useStyles = () => {
  return StyleSheet.create({
    container: {
      backgroundColor: 'rgba(0,0,0,0.4)',
      borderRadius: 120,
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
};

export default useStyles;