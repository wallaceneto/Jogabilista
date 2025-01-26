import { Alert } from "react-native";
import { reloadApp } from "./reloadApp";
import { cleanStorage } from "../../../../storage/asyncStorage";

const cleanStorageAlert = async () => {
  Alert.alert(
    'Deseja mesmo apagar todos os dados?', 
    'Essa ação é ireverssível e irá limpar todos os dados armazenados nesse aplicativo, restaurando-o as suas configurações de fábrica.',
    [
      {
        text: 'Cancelar',
        style: 'cancel',
        onPress: () => {}
      },
      {
        text: 'Apagar',
        onPress: () => {
          cleanStorage();
          reloadApp();
        }
      }
    ]
  );
}

export { cleanStorageAlert }