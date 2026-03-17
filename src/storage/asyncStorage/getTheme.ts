import * as SecureStore from 'expo-secure-store';

const getTheme = async () => {
  try {
    const value = await SecureStore.getItemAsync('theme');
    return value !== null ? value : 'yellow';
  } catch (error) {
    console.error('Error in get theme from storage', error);
  }
}

export { getTheme }