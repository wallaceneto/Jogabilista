import { primaryColor } from "../../../types";

export type IThemeButtonProps = {
  text: string, 
  color: primaryColor,
  current: string, 
  setCurrent: (value: string) => void,
};
