import { IScoreFilter } from "../../../global/pagesLib/Home/types";
import { IOptionType } from "../types";
import { addScoreFilter } from "./addFilter"
import { removeScoreFilter } from "./removefilter";

const scoreOptions: (value: IScoreFilter[], func: (value: IScoreFilter[]) => void) => IOptionType[] = (
  platformFilter: IScoreFilter[],
  setPlatformFilter: (value: IScoreFilter[]) => void,
) => {
  return [
    {
      optionType: 'Score',
      option: 'Bom',
      addItem: () => addScoreFilter('Bom', platformFilter, setPlatformFilter),
      removeItem: () => removeScoreFilter('Bom', platformFilter, setPlatformFilter)
    },
    { 
      optionType: 'Score',
      option: 'Mediano',
      addItem: () => addScoreFilter('Mediano', platformFilter, setPlatformFilter),
      removeItem: () => removeScoreFilter('Mediano', platformFilter, setPlatformFilter)
    },
    { 
      optionType: 'Score',
      option: 'Ruim',
      addItem: () => addScoreFilter('Ruim', platformFilter, setPlatformFilter),
      removeItem: () => removeScoreFilter('Ruim', platformFilter, setPlatformFilter)
    },
  ]
};

export { scoreOptions };
