import { IPlatformFilter, IScoreFilter, IStatusFilter } from "../../../global/pagesLib/Home/types";

const addPlatformFilter = (
  value: IPlatformFilter,
  platformList: IPlatformFilter[],
  setFilters: (value: IPlatformFilter[]) => void
) => {
  const list = platformList;
  list.push(value);
  setFilters(list);
}

const addScoreFilter = (
  value: IScoreFilter,
  scoreList: IScoreFilter[],
  setFilters: (value: IScoreFilter[]) => void
) => {
  const list = scoreList;
  list.push(value);
  setFilters(list);
}

const addStatusFilter = (
  value: IStatusFilter,
  statusList: IStatusFilter[],
  setFilters: (value: IStatusFilter[]) => void
) => {
  const list = statusList;
  list.push(value);
  setFilters(list);
}

export { addPlatformFilter, addScoreFilter, addStatusFilter }