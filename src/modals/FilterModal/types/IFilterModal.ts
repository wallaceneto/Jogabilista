import { IPlatformFilter, IScoreFilter, IStatusFilter } from "../../../global/pagesLib/Home/types";

export type IFilterModalProps = {
  platformFilters: IPlatformFilter[],
  setPlatformFilters: (value: IPlatformFilter[]) => void,
  scoreFilters: IScoreFilter[],
  setScoreFilters: (value: IScoreFilter[]) => void,
  statusFilters: IStatusFilter[],
  setStatusFilters: (value: IStatusFilter[]) => void,
  onClose: () => void,
  onSubmit: () => void,
};
