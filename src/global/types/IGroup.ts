export type IGroup = {
  id: string,
  name: string,
  create_date: string,
  games: { id: string, name: string }[]
  favorite?: boolean,
};
