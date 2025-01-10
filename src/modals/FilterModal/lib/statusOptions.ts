import { IStatusFilter } from "../../../global/pagesLib/Home/types";
import { IOptionType } from "../types";
import { addStatusFilter } from "./addFilter"
import { removeStatusFilter } from "./removefilter";

const statusOptions: (value: IStatusFilter[], func: (value: IStatusFilter[]) => void) => IOptionType[] = (
  platformFilter: IStatusFilter[],
  setPlatformFilter: (value: IStatusFilter[]) => void,
) => {
  return [
    { 
      optionType: 'Status',
      option: 'Jogando',
      addItem: () => addStatusFilter('Jogando', platformFilter, setPlatformFilter),
      removeItem: () => removeStatusFilter('Jogando', platformFilter, setPlatformFilter)
    },
    { 
      optionType: 'Status',
      option: 'Largado',
      addItem: () => addStatusFilter('Largado', platformFilter, setPlatformFilter),
      removeItem: () => removeStatusFilter('Largado', platformFilter, setPlatformFilter)
    },
    { 
      optionType: 'Status',
      option: 'Platinado',
      addItem: () => addStatusFilter('Platinado', platformFilter, setPlatformFilter),
      removeItem: () => removeStatusFilter('Platinado', platformFilter, setPlatformFilter)
    },
    { 
      optionType: 'Status',
      option: 'Terminado',
      addItem: () => addStatusFilter('Terminado', platformFilter, setPlatformFilter),
      removeItem: () => removeStatusFilter('Terminado', platformFilter, setPlatformFilter)
    },
  ]
};

export { statusOptions };
