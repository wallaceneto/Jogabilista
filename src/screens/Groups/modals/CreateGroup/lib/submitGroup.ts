import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import moment from "moment";
import uuid from 'react-native-uuid';
import { IGame, IGroup } from "../../../../../global/types";
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
    create_date: moment(new Date()).format('L'),
    games: gameList,
  }

  dispatch(addGroup(group));
  onClose();
}

export { submitGroup }