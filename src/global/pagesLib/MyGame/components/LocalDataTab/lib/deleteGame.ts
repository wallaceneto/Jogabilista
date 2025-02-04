import { UnknownAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { router } from "expo-router";

import { removeGame } from "../../../../../../reducers/user/userSlice";

const deleteGame = (
  id: string,
  setLoading: (value: boolean) => void,
  dispatch: Dispatch<UnknownAction>,
) => {
  setLoading(true);

  dispatch(removeGame(id));
  router.back();

  setLoading(false);
}

export { deleteGame }