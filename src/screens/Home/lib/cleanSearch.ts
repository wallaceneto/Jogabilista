const cleanSearch = (
  onChangeText: (value: string) => void,
  fetchData: () => void,
) => {
  onChangeText('');
  fetchData();
}

export { cleanSearch }
