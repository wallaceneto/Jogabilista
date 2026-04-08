export type IGroup = {
  id: string,
  name: string,
  create_date: Date,
  games: { id: string, name: string }[]
  favorite?: boolean,
};
