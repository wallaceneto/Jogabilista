import { IGame } from "../../../../../global/types";

const addGameToList = (
  game: IGame,
  selectedGames: IGame[],
  setSelectedGames: (value: IGame[]) => void,
) => {
  if (!selectedGames.includes(game)) {
    setSelectedGames([...selectedGames, game]);
  }
}

export { addGameToList }