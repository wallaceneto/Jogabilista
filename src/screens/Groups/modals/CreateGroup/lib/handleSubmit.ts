import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { submitGroup } from "./submitGroup";
import { IGame, IGroup } from "../../../../../global/types";

const handleSubmit = (
  name: string,
  setErrorMsg: (value: string) => void,
  selectedGames: IGame[],
  onClose: () => void,
  dispatch: Dispatch<UnknownAction>,
  group?: IGroup
) => {
  if (name.trim() === '') {
    setErrorMsg('Nome obrigatório')
  } else {
    submitGroup(
      name,
      selectedGames,
      onClose,
      dispatch,
      group?.create_date,
      group?.id
    );
  }
}

export { handleSubmit };