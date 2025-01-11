import { createContext, PropsWithChildren, useState } from "react";

import { IThemeContext } from "./types";
import { themes } from "../../../themes";

export const ThemeContext = createContext<IThemeContext>({
  currentTheme: 'yellow',
  colors: themes.yellow,
  toggleTheme: () => {},
});

export const ThemeProvider = ({children}: PropsWithChildren) => {
  const [theme, setTheme] = useState(themes.yellow);
  const [currentTheme, setCurrentTheme] = useState('yellow');
  
  const toggleTheme = (otherTheme: string) => {
    let newTheme;

    switch (otherTheme) {
      case 'purple':
        newTheme = themes.purple;
        break;
      case 'red':
        newTheme = themes.red;
        break;
      case 'black':
        newTheme = themes.black;
        break;
      default:
        newTheme = themes.yellow;
        break;
    }

    setCurrentTheme(otherTheme);
    setTheme(newTheme);
  }

  return (
    <ThemeContext.Provider 
      value={{currentTheme: currentTheme, colors: theme, toggleTheme: toggleTheme}}
    >
      {children}
    </ThemeContext.Provider>
  );
}