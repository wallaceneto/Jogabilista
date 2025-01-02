import { IPlatform } from "./IPlatform";
import { IStatus } from "./IStatus";

export type IGame = {
  name: string,
  platform?: IPlatform,
  status?: IStatus,
  interest_score?: number, // Eixo x = interessancia
  quality_score?: number, // Eixo y = qualidade (0 representando 'J' e 10 representando 'A')
  play_time?: number,
  finish_date?: Date,
};
