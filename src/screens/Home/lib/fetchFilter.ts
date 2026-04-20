import Game from "../../../global/classes/Game";
import { IPlatformFilter, IScoreFilter, IStatusFilter } from "../types";

const fetchFilter = (
  games: Game[],
  platformFilter: IPlatformFilter[],
  statusFilter: IStatusFilter[],
  scoreFilter: IScoreFilter[],
  setLoading: (value: boolean) => void,
  setFilterGames: (value: Game[]) => void,
) => {
  setLoading(true);

  let gameList: Game[] = [];
  const data = games;

  data.forEach((item) => {
    const applyPlatformFilter
      = platformFilter.length > 0 ? platformFilter.includes(item.getPlatform) : true;
    const applyStatusFilter
      = statusFilter.length > 0 ? statusFilter.includes(item.getStatus) : true;
    const applyScoreFilter
      = scoreFilter.length > 0 ? scoreFilter.includes(item.getScoreQuadrant()) : true;

    if (applyPlatformFilter && applyStatusFilter && applyScoreFilter) {
      gameList.push(item);
    }

  });

  setFilterGames(gameList);
  setLoading(false);
}

export { fetchFilter }