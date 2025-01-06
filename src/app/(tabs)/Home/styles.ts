import {StyleSheet} from 'react-native';

const useStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      marginBottom: 85,
    },
    loading: {
      alignSelf: 'center',
      marginTop: 80,
    },
    search: {
      backgroundColor: 'pink',
      paddingVertical: 24,
      paddingHorizontal: 16,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    title: {
      fontSize: 20,
      marginBottom: 16,
    },
    content: {
      paddingHorizontal: 12,
    },
  });
};

export default useStyles;