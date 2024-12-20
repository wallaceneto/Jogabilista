import { IGame } from "../types";

const temporaryGames: IGame[] = [
  {
    id: '0',
    name: 'Super Mario Wonder',
    create_date: new Date(),
    plataform: 'Nintendo',
    status: 'Terminado',
    interest_score: 10,
    quality_score: 10,
    play_time: 480,
  },
  {
    id: '1',
    name: 'Saints Row (2022)',
    create_date: new Date(),
    plataform: 'Playstation',
    status: 'Largado',
    interest_score: 1,
    quality_score: 3,
    play_time: 480,
  },
  {
    id: '2',
    name: 'Scorn',
    create_date: new Date(),
    plataform: 'Xbox',
    status: 'Platinado',
    interest_score: 10,
    quality_score: 4,
    play_time: 360,
  },
  {
    id: '3',
    name: 'Age of Empires 4',
    create_date: new Date(),
    plataform: 'PC',
    status: 'Jogando',
    interest_score: 4,
    quality_score: 4,
    play_time: 120,
  },
  {
    id: '4',
    name: 'Monument Valley 3',
    create_date: new Date(),
    status: 'Jogando',
    play_time: 120,
  }
];

export { temporaryGames };