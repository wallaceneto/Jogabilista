import Game from "../../../classes/Game";

const fetchSearch = (
  searchString: string,
  fetchData: () => void,
  setLoading: (value: boolean) => void,
  games: Game[],
  setFilterGames: (list: Game[]) => void,
  setShowLabel: (value: boolean) => void,
) => {
  if (searchString.trim() === '') {
    fetchData();
    setShowLabel(true);
  } else {
    setLoading(true);
    setShowLabel(false);

    let gameList: Game[] = [];
    games.forEach((game) => {
      const gameName = game.getName.toLowerCase();
      const searchText = searchString.toLowerCase();

      if (gameName.includes(searchText)) {
        gameList.push(game);
      }
    });
    setFilterGames(gameList);

    setLoading(false);
  }
}

export { fetchSearch }