import * as SecureStore from 'expo-secure-store';

const getAllGroups = async () => {
  try {
    const jsonValue = await SecureStore.getItemAsync('all-groups');
    return jsonValue !== null ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.error('Error in get group list from storage', error);
  }
}

export { getAllGroups }