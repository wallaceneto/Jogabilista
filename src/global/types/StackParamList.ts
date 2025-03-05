import Game from "../classes/Game";

export type StackParamList = {
  Homepage: undefined,
  AddGame: undefined,
  MyGame: { game: Game },
  SearchGame: { gameName: string } | undefined,
  Settings: undefined,
  SwitchTheme: undefined,
};
