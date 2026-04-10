import { Alert } from "react-native";
import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { deleteGame } from "./deleteGame";
import { removeGroup } from "../../../../../reducers/user/userSlice";

const handleDelete = (
  groupId: string,
  onClose: () => void,
  dispatch: Dispatch<UnknownAction>,
  goBack: () => void,
) => {
  Alert.alert(
    "Tem certeza que deseja fazer isso?",
    "Essa ação vai deletar o grupo de forma ireverssível. Os jogos, no entando, não serão deletados. Deseja prosseguir?",
    [
      { text: "Cancelar", onPress: () => { } },
      {
        text: "Confirmar",
        onPress: () => deleteGame(
          () => dispatch(removeGroup(groupId)),
          onClose
        )
      },
    ]
  );
}

export { handleDelete };