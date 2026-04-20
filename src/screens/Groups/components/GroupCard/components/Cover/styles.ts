import { StyleSheet } from 'react-native';

const useStyles = (bgColor: string) => {
  return StyleSheet.create({
    container: {
      backgroundColor: bgColor,
      width: 75,
      height: 114,
      borderRadius: 4,
      boxShadow: '2px 2px 4px 0 rgba(0, 0, 0, 0.25)',
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#555',
      borderWidth: 1,
      marginRight: -4,
      padding: 4,
    },
    text: {
      color: '#FFF',
      fontSize: 12,
    },
  });
};

export default useStyles;