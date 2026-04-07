import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { IGame, IGroup } from "../../../../../global/types";
import uuid from 'react-native-uuid';
import { addGroup } from "../../../../../reducers/user/userSlice";

const submitGroup = (
  name: string,
  games: IGame[],
  onClose: () => void,
  dispatch: Dispatch<UnknownAction>,
) => {
  let gameList: { id: string, name: string }[] = [];

  games.forEach((game) => {
    if (game.id !== undefined) gameList.push({ id: game.id, name: game.name });
  });

  const group: IGroup = {
    name,
    id: uuid.v4(),
    create_date: (new Date()).toLocaleDateString(),
    games: gameList,
  }

  dispatch(addGroup(group));
  onClose();
}

export { submitGroup }