const handleOptionPress = (
  value: string,
  currentValue: string,
  setCurrentValue: (value: string) => void,
  setValue: (value: string) => void,
) => {
  let newOption = currentValue === value ? '' : value;

  setCurrentValue(newOption);
  setValue(newOption);
}

export { handleOptionPress }