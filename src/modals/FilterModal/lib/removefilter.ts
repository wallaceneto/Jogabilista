import { IPlatformFilter, IScoreFilter, IStatusFilter } from "../../../global/pagesLib/Home/types";

const removePlatformFilter = (
  value: IPlatformFilter,
  platformList: IPlatformFilter[],
  setFilters: (value: IPlatformFilter[]) => void
) => {
  const list = platformList;
  list.splice(list.indexOf(value), 1);
  setFilters(list);
}

const removeScoreFilter = (
  value: IScoreFilter,
  scoreList: IScoreFilter[],
  setFilters: (value: IScoreFilter[]) => void
) => {
  const list = scoreList;
  list.splice(list.indexOf(value), 1);
  setFilters(list);
}

const removeStatusFilter = (
  value: IStatusFilter,
  statusList: IStatusFilter[],
  setFilters: (value: IStatusFilter[]) => void
) => {
  const list = statusList;
  list.splice(list.indexOf(value), 1);
  setFilters(list);
}

export { removePlatformFilter, removeScoreFilter, removeStatusFilter }