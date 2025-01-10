import { IPlatformFilter } from "../../../global/pagesLib/Home/types";
import { IOptionType } from "../types";
import { addPlatformFilter } from "./addFilter"
import { removePlatformFilter } from "./removefilter";

const platformOptions: (value: IPlatformFilter[], func: (value: IPlatformFilter[]) => void) => IOptionType[] = (
  platformFilter: IPlatformFilter[],
  setPlatformFilter: (value: IPlatformFilter[]) => void,
) => {
  return [
    { 
      optionType: 'Platform',
      option: 'Nintendo',
      addItem: () => addPlatformFilter('Nintendo', platformFilter, setPlatformFilter),
      removeItem: () => removePlatformFilter('Nintendo', platformFilter, setPlatformFilter)
    },
    { 
      optionType: 'Platform',
      option: 'Playstation',
      addItem: () => addPlatformFilter('Playstation', platformFilter, setPlatformFilter),
      removeItem: () => removePlatformFilter('Playstation', platformFilter, setPlatformFilter)
    },
    { 
      optionType: 'Platform',
      option: 'Xbox',
      addItem: () => addPlatformFilter('Xbox', platformFilter, setPlatformFilter),
      removeItem: () => removePlatformFilter('Xbox', platformFilter, setPlatformFilter)
    },
    { 
      optionType: 'Platform',
      option: 'PC',
      addItem: () => addPlatformFilter('PC', platformFilter, setPlatformFilter),
      removeItem: () => removePlatformFilter('PC', platformFilter, setPlatformFilter)
    },
    { 
      optionType: 'Platform',
      option: 'Outro',
      addItem: () => addPlatformFilter('Outro', platformFilter, setPlatformFilter),
      removeItem: () => removePlatformFilter('Outro', platformFilter, setPlatformFilter)
    },
  ]
};

export { platformOptions };
