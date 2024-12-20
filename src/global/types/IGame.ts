export type IGame = {
  id: string,
  name: string,
  create_date: Date,
  plataform?: 'Nintendo' | 'Playstation' | 'Xbox' | 'PC' | 'Outro',
  status?: 'Terminado' | 'Largado' | 'Platinado' | 'Jogando',
  interest_score?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |8 | 9 | 10, // Eixo x = interessancia
  quality_score?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |8 | 9 | 10, // Eixo y = qualidade (0 representando 'J' e 10 representando 'A')
  play_time?: number,
  finish_date?: Date,
};
