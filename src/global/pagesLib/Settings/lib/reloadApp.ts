import { reloadAppAsync } from "expo";

const reloadApp = async () => {
  await reloadAppAsync('Removing all storage data');
  console.log('Apagou')
}

export { reloadApp }