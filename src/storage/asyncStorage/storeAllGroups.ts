import * as SecureStore from 'expo-secure-store';
import { IGroup } from "../../global/types";

const storeAllGroups = async (allGroups: IGroup[]) => {
  try {
    const jsonValue = JSON.stringify(allGroups);
    await SecureStore.setItemAsync('all-groups', jsonValue);
  } catch (error) {
    console.error('Error in store group list', error);
  }
}

export { storeAllGroups };