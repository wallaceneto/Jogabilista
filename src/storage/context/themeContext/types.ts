import { ITheme } from "../../../themes";

export type IThemeContext = {
  currentTheme: string,
  colors: ITheme,
  toggleTheme: (value: string) => void,
};
