import { IGame } from "../types";

const temporaryGames: IGame[] = [
  {
    name: 'Super Mario Wonder',
    platform: 'Nintendo',
    status: 'Terminado',
    interest_score: 10,
    quality_score: 10,
    play_time: 480,
  },
  {
    name: 'Saints Row (2022)',
    platform: 'Playstation',
    status: 'Largado',
    interest_score: 1,
    quality_score: 3,
    play_time: 480,
  },
  {
    name: 'Scorn',
    platform: 'Xbox',
    status: 'Platinado',
    interest_score: 10,
    quality_score: 4,
    play_time: 360,
  },
  {
    name: 'Age of Empires 4',
    platform: 'PC',
    status: 'Jogando',
    interest_score: 4,
    quality_score: 4,
    play_time: 120,
  },
  {
    name: 'Monument Valley 3',
    status: 'Jogando',
    play_time: 120,
  },
  {
    name: 'Crash 3',
  }
];

export { temporaryGames };