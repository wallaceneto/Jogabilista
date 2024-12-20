const convertScore = (quality: number, interest: number) => {
  let score = '';

  const letters = ['J', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'];
  score = letters[quality - 1];
  score += interest.toString();

  return score;
}

export { convertScore }