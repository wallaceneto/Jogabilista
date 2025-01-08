import {StyleSheet} from 'react-native';

const useStyles = () => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
    text: {
      marginLeft: 8,
    },
  });
};

export default useStyles;