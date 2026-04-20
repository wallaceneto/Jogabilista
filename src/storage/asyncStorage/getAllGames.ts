import * as SecureStore from 'expo-secure-store';

const getAllGames = async () => {
  try {
    const jsonValue = await SecureStore.getItemAsync('all-games');
    return jsonValue !== null ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.error('Error in get game list from storage', error);
  }
}

export { getAllGames }