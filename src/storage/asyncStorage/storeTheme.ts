import AsyncStorage from "@react-native-async-storage/async-storage";

const storeTheme = async (theme: string) => {
  try {
    await AsyncStorage.setItem('theme', theme);
  } catch (error) {
    console.error('Error in store theme', error);
  }
}

export { storeTheme };