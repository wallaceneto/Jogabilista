import Game from "../../../global/classes/Game";
import { IGameXlsxFormat } from "../types";

const formatGameXlsx = (games: Game[]) => {
  let gamesFormated: IGameXlsxFormat[] = [];

  games.forEach((item) => {
    gamesFormated.push({
      "Nome": item.getName,
      "Onde_joguei": item.getPlatform,
      "Status": item.getStatus,
      "Terminado_em": item.getFinishDate,
      "Nota_naval": item.getOverallScore(),
    });
  })

  return gamesFormated;
}

export { formatGameXlsx };