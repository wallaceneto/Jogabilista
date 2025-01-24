import AsyncStorage from "@react-native-async-storage/async-storage";

const getTheme = async () => {
  try {
    const value = await AsyncStorage.getItem('theme');
    return value !== null ? value : 'yellow';
  } catch (error) {
    console.error('Error in get theme from storage', error);
  }
}

export { getTheme }