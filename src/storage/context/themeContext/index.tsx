import { createContext, PropsWithChildren } from "react";

import { IThemeContext } from "./types";
import { themes } from "../../../themes";

export const ThemeContext = createContext<IThemeContext>({
  colors: themes.yellow,
});

export const ThemeProvider = ({children}: PropsWithChildren) => {
  const theme = themes.yellow;

  return (
    <ThemeContext.Provider value={{colors: theme}}>
      {children}
    </ThemeContext.Provider>
  );
}