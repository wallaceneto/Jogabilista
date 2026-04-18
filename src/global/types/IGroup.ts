import { IPlatform } from "./IPlatform";

export type IGroup = {
  id: string,
  name: string,
  create_date: string,
  games: { id: string, name: string, platform?: IPlatform }[]
  favorite?: boolean,
};
