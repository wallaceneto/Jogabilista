import Game from "../../../classes/Game";

const fetchSearch = (
  games: Game[],
  searchString: string,
  setLoading: (value: boolean) => void,
  setFilterGames: (list: Game[]) => void,
) => {
  const queryString = searchString.trim().toLowerCase();

  setLoading(true);

  let gameList: Game[] = [];
  games.forEach((game) => {
    const gameName = game.getName.toLowerCase();

    if (gameName.includes(queryString)) {
      gameList.push(game);
    }
  });
  setFilterGames(gameList);

  setLoading(false);
}

export { fetchSearch }