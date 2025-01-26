import { ITimeUnit } from "../types";

const convertPlayTime = (time: string, unit: ITimeUnit) => {
  return unit === 'hr' ? parseInt(time) * 60 : parseInt(time);
}

export { convertPlayTime }