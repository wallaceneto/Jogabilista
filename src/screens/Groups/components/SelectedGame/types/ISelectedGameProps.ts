import { IGame } from "../../../../../global/types";

export type ISelectedGameProps = {
  game: IGame,
  deleteItem: (value: IGame) => void
};
