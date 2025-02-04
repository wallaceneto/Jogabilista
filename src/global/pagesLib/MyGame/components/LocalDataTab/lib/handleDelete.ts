import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { Alert } from "react-native";
import { router } from "expo-router";

import { removeGame } from "../../../../../../reducers/user/userSlice";

const handleDelete = (
  id: string,
  dispatch: Dispatch<UnknownAction>,
) => {
  Alert.alert(
    'Deseja mesmo apagar esse jogo?', 
    'Se prosseguir o jogo e todos os seus dados serão deletados sua lista de jogos!\n'
    + '\n(Ainda será possível adicioná-lo novamente como um novo jogo)',
    [
      {
        text: 'Apagar',
        onPress: () => {
          setTimeout(() => {
              dispatch(removeGame(id));
              router.replace('(tabs)');;
            }, 900);
        }
      },
      {
        text: 'Cancelar',
        style: 'cancel',
        onPress: () => {}
      },
    ]
  )
}

export { handleDelete }