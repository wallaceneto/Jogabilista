import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import moment from "moment";
import uuid from 'react-native-uuid';
import { IGame, IGroup, IPlatform } from "../../../../../global/types";
import { addGroup, updateGroup } from "../../../../../reducers/user/userSlice";

const submitGroup = (
  name: string,
  games: IGame[],
  onClose: () => void,
  dispatch: Dispatch<UnknownAction>,
  previous_create_date?: string,
  previous_id?: string,
) => {
  let gameList: { id: string, name: string, platform?: IPlatform }[] = [];

  games.forEach((game) => {
    if (game.id !== undefined) gameList.push({ id: game.id, name: game.name, platform: game.platform });
  });

  const group: IGroup = {
    name,
    id: previous_id || uuid.v4(),
    create_date: previous_create_date || moment(new Date()).format('DD/MM/YYYY'),
    games: gameList,
  }

  if (previous_create_date && previous_id) {
    dispatch(updateGroup(group));
  } else {
    dispatch(addGroup(group));
  }
  onClose();
}

export { submitGroup }