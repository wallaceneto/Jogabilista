import { api } from "./api";
import { API_CLIENT_ID, API_TOKEN } from "./mock";

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

export { searchGame }