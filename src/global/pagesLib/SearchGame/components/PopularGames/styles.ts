import {StyleSheet} from 'react-native';

const useStyles = () => {

  return StyleSheet.create({
    loading: {
      marginTop: 80,
    },
    pageTitle: {
      marginVertical: 24,
      marginLeft: 16,
      fontSize: 18,
    },
    button: {
      flexDirection: 'row',
    },
    divider: {
      marginBottom: 16,
    },
    icon: {
      marginLeft: 16,
      fontSize: 22,
    },
    title: {
      marginLeft: 12,
      marginBottom: 16,
    },
  });
};

export default useStyles;