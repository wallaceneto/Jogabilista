import * as SecureStore from 'expo-secure-store';

const cleanStorage = async () => {
  try {
    await SecureStore.deleteItemAsync('theme');
    await SecureStore.deleteItemAsync('all-games');
    await SecureStore.deleteItemAsync('all-groups');
    console.log('Dados deletados com sucesso!')
  } catch (error) {
    console.error('Failed to clean storage', error);
  }
}

export { cleanStorage };