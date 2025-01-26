import AsyncStorage from "@react-native-async-storage/async-storage"

const cleanStorage = async () => {
  try {
    await AsyncStorage.multiRemove(['theme', 'all-games'])
  } catch (error) {
    console.error('Failed to clean storage', error);
  }
}

export { cleanStorage };