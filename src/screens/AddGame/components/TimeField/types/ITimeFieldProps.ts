import { ITimeUnit } from "../../../types";

export type ITimeFieldProps = {
  value: string,
  onTextChange: (value: string) => void,
  timeUnit: ITimeUnit,
  setTimeUnit: (value: ITimeUnit) => void,
};
