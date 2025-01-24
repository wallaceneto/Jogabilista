import AsyncStorage from "@react-native-async-storage/async-storage";

const getAllGames = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('all-games');
    return jsonValue !== null ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.error('Error in get game list from storage', error);
  }
}

export { getAllGames }