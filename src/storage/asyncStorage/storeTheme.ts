import * as SecureStore from 'expo-secure-store';

const storeTheme = async (theme: string) => {
  try {
    await SecureStore.setItemAsync('theme', theme);
  } catch (error) {
    console.error('Error in store theme', error);
  }
}

export { storeTheme };