import Game from "../classes/Game";

export type StackParamList = {
  Homepage: undefined,
  AddGame: { game: Game } | undefined,
  MyGame: { game: Game },
  SearchGame: { gameName: string } | undefined,
  Settings: undefined,
  SwitchTheme: undefined,
};
