import AsyncStorage from "@react-native-async-storage/async-storage";
import { IGame } from "../../global/types";

const storeAllGames = async (allGames: IGame[]) => {
  try {
    const jsonValue = JSON.stringify(allGames);
    await AsyncStorage.setItem('all-games', jsonValue);
  } catch (error) {
    console.error('Error in store game list', error);
  }
}

export { storeAllGames };