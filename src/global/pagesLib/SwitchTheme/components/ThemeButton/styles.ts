import {StyleSheet} from 'react-native';

const useStyles = () => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 40,
    },
    leftSide: {
      flexDirection: 'row',
    },
    colorPreview: {
      height: 30,
      width: 30,
      borderRadius: 8,
      marginRight: 8,
    },
    text: {
      fontSize: 20,
      paddingBottom: 2,
    },
  });
};

export default useStyles;