import { api } from "./api";

type IImageQuality = 'cover_small' | 'screenshot_med' | 'cover_big' | 'logo_med'
  | 'screenshot_big' | 'screenshot_huge' | 'thumb' | 'micro' | '720p' | '1080p';

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

async function getCoverUrl(id: string, quality?: IImageQuality) {
  try {
    const body =
    `fields id,image_id; 
    where id = ${id};
    `
    const response = await api.post('covers/', body);
    
    if (response.status === 200) {
      const base_url = `http://images.igdb.com/igdb/image/upload/t_${quality || '720p'}/`;

      return base_url + response.data[0].image_id + '.jpg';
    } else {
      console.log('Request failed: ', response.status);

      return null;
    }
  } catch (error) {
    console.error('Error to get game cover', error);
  }
}

export { searchGame, getPopularGames, getCoverUrl }