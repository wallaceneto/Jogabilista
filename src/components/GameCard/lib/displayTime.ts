import Game from "../../../global/classes/Game";

const displayTime = (game: Game) => {
  const hours = game.getPlaytimeInHours();

  if (hours > 0) {
    const plural = hours > 1 ? 's' : '';
    return hours + ' hora' + plural;
  } else {
    const minutes = game.getPlayTime;
    const plural = minutes > 1 ? 's' : '';

    return minutes === 0 ? 'não jogado' : (minutes + ' minuto' + plural);
  }
}

export { displayTime }