import { IGame, IGroup } from "../../../../../global/types";
import uuid from 'react-native-uuid';

const submitGroup = (
  name: string,
  games: IGame[],
  onClose: () => void,
  addGroup: Function
) => {
  if (name.trim() !== '') {
    const date = new Date();
    let gameList: { id: string, name: string }[] = [];

    games.forEach((game) => {
      if (game.id !== undefined) gameList.push({ id: game.id, name: game.name });
    });

    const group: IGroup = {
      name,
      id: uuid.v4(),
      create_date: date.toDateString(),
      games: gameList,
    }

    addGroup(group);
    onClose();
  } else {
    console.log('Nome vazio');
  }
}

export { submitGroup }