import { IApiGames } from "../../../global/types";
import { searchGame } from "../../../services/getData";

const handleSearch = async (
  gameName: string,
  setLoading: (value: boolean) => void,
  setResults: (value: IApiGames[]) => void,
  setSearchMade: (values: boolean) => void,
) => {
  setLoading(true);

  const query = gameName.trim();
  if (query) {
    setSearchMade(true);
    const response = await searchGame(query);

    if (response) {
      let gamesName: IApiGames[] = [];

      response.data.forEach((game: IApiGames) => {
        if (game.id && game.name) gamesName.push(game);
      });

      setResults(gamesName);
    }
  }

  setLoading(false);
}

export { handleSearch }