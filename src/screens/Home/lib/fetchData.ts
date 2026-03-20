import Game from "../../../global/classes/Game";
import { IGame } from "../../../global/types";

const fetchData = (
  allGames: IGame[],
  setLoading: (value: boolean) => void,
  setGames: (value: Game[]) => void,
  setFilterGames: (value: Game[]) => void
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
  setFilterGames(gameList);

  setLoading(false);
}

export { fetchData }