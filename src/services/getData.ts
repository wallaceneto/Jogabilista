import { api } from "./api";

async function searchGame(name: string, limit?: number) {
  try {
    const body =
    `search "${name}";
    fields name, cover, first_release_date, platforms, involved_companies;
    limit ${limit || 10};`
  
    const response = await api.post('games/', body);

    return response;
  } catch (error) {
    console.error('Error to search game', error);
  }
}

async function getPopularGames(limit?: number) {
  try {
    const body =
    `fields name, cover, first_release_date;
    sort hypes desc;
    limit ${limit || 10};
    `

    const response = await api.post('games/', body);
    
    return response;
  } catch (error) {
    console.error('Error to get popular games', error);
  }
}

export { searchGame, getPopularGames }