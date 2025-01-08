import { IPlatformFilter, IScoreFilter, IStatusFilter } from "../../../global/pagesLib/Home/types";

export type IFilterModalProps = {
  onClose: () => void,
  platformFilters: IPlatformFilter[],
  setPlatformFilters: (value: IPlatformFilter[]) => void,
  scoreFilters: IScoreFilter[],
  setScoreFilters: (value: IScoreFilter[]) => void,
  statusFilters: IStatusFilter[],
  setStatusFilters: (value: IStatusFilter[]) => void,
};
