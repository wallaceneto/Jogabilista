import Game from "../classes/Game";
import { IGame } from "../types";


const fetchGames = (
  allGames: IGame[],
  setLoading: (value: boolean) => void,
  setGames: (value: Game[]) => void,
  setFilterGames?: (value: Game[]) => void
) => {
  setLoading(true);

  let gameList: Game[] = [];

  const data = allGames;
  data.forEach((item) => {
    try {
      const game = new Game(item);
      gameList.push(game);
    } catch (e) {
      console.error(e)
    }
  });

  setGames(gameList);
  if (setFilterGames) setFilterGames(gameList);

  setLoading(false);
}

export { fetchGames }