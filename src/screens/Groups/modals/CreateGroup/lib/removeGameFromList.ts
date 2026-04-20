import { IGame } from "../../../../../global/types";

const removeGameFromList = (
  game: IGame,
  selectedGames: IGame[],
  setSelectedGames: (value: IGame[]) => void,
) => {
  let updatedList: IGame[] = [];

  selectedGames.forEach((item) => {
    if (item.id !== game.id) {
      updatedList.push(item);
    }
  })

  setSelectedGames(updatedList);
}

export { removeGameFromList };