export type ISearchBarProps = {
  text: string,
  onChangeText: (value: string) => void,
  cleanSearch: () => void,
  handleSearch: (value: string) => void,
}
