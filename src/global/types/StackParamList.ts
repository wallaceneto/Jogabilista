import Game from "../classes/Game";
import { IGroup } from "./IGroup";

export type StackParamList = {
  Homepage: undefined,
  AddGame: { game: Game } | undefined,
  MyGame: { game: Game },
  SearchGame: { gameName: string } | undefined,
  GroupPage: { group: IGroup },
  Settings: undefined,
  SwitchTheme: undefined,
};
