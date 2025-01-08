import { IPlatformFilter, IScoreFilter, IStatusFilter } from "../../../../../global/pagesLib/Home/types";
import { IOptionType } from "../../../types";

export type IFiltersCheckboxsProps = {
  content: IOptionType[],
  platformFilters: IPlatformFilter[],
  scoreFilters: IScoreFilter[],
  statusFilters: IStatusFilter[],
};
