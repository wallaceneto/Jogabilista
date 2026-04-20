import { reloadAppAsync } from "expo";

const reloadApp = async () => {
  await reloadAppAsync('Removing all storage data');
}

export { reloadApp }