import * as SecureStore from 'expo-secure-store';
import { IGame } from "../../global/types";

const storeAllGames = async (allGames: IGame[]) => {
  try {
    const jsonValue = JSON.stringify(allGames);
    await SecureStore.setItemAsync('all-games', jsonValue);
  } catch (error) {
    console.error('Error in store game list', error);
  }
}

export { storeAllGames };