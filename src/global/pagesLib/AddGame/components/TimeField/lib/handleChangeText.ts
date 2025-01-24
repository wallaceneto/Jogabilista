const handleChangeText = (text: string, updateText: (value: string) => void) => {
  const numeralValue = parseInt(text);
  if (Number.isNaN(numeralValue)) {
    updateText('0');
  } else {
    updateText(numeralValue.toString());
  }
}

export { handleChangeText }