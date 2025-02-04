import { UnknownAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { router } from "expo-router";

import { removeGame } from "../../../../../../reducers/user/userSlice";

const deleteGame = (
  id: string,
  dispatch: Dispatch<UnknownAction>,
) => {
  setTimeout(() => {
    dispatch(removeGame(id));
    router.replace('(tabs)');;
  }, 900);
}

export { deleteGame }