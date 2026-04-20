import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { Alert } from "react-native";
import { removeGame } from "../../../../../reducers/user/userSlice";

const handleDelete = (
  id: string,
  dispatch: Dispatch<UnknownAction>,
  setLoading: (value: boolean) => void,
  backToHome: Function,
) => {
  Alert.alert(
    'Deseja mesmo apagar esse jogo?',
    'Se prosseguir o jogo e todos os seus dados serão deletados sua lista de jogos!\n'
    + '\n(Ainda será possível adicioná-lo novamente como um novo jogo)',
    [
      {
        text: 'Apagar',
        onPress: () => {
          setLoading(true);

          setTimeout(() => {
            dispatch(removeGame(id));
            backToHome();
          }, 900);
        }
      },
      {
        text: 'Cancelar',
        style: 'cancel',
        onPress: () => setLoading(false)
      },
    ]
  )
}

export { handleDelete }