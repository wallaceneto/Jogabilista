import { IPlatformFilter, IScoreFilter, IStatusFilter } from "../../../global/pagesLib/Home/types";

const setCheckbox = (
  optionType: string,
  item: string,
  platformFilters: IPlatformFilter[],
  scoreFilters: IScoreFilter[],
  statusFilters: IStatusFilter[]
) => {
  let list:any[] = [];

  switch (optionType) {
    case 'Platform':
      list = platformFilters;
      break;
    case 'Score':
      list = scoreFilters;
      break;
    case 'Status':
      list = statusFilters;
      break;
    default:
      break;
  }

  return list.includes(item);
}

export { setCheckbox }