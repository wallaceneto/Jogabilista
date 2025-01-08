export type IOptionType = {
  optionType: 'Platform' | 'Score' | 'Status',
  option: string,
  addItem: () => void,
  removeItem: () => void,
};