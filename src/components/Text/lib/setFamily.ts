const setFamily = (weight: string) => {
  switch (weight) {
    case 'light':
      return 'Quicksand_300Light';
    case 'regular':
      return 'Quicksand_400Regular';
    case 'medium':
      return 'Quicksand_500Medium';
    case 'semibold':
      return 'Quicksand_600SemiBold';
    case 'bold':
      return 'Quicksand_700Bold';
    default:
      return 'Quicksand_400Regular';
  }
}

export { setFamily };