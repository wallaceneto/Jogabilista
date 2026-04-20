const toggleTimeUnit = (currentUnit: string, setUnit: Function) => {
  switch (currentUnit) {
    case 'hr':
      setUnit('min');
      break;
    case 'min':
      setUnit('hr');
      break;
    default:
      setUnit('min');
      break;
  }
}

export { toggleTimeUnit }