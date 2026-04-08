import { createContext, PropsWithChildren, useState } from "react";

import { IThemeContext } from "./types";
import { themes } from "../../../themes";
import { setStatusBarBackgroundColor } from "expo-status-bar";

export const ThemeContext = createContext<IThemeContext>({
  currentTheme: 'purple',
  colors: themes.purple,
  toggleTheme: () => {},
});

export const ThemeProvider = ({children}: PropsWithChildren) => {
  const [theme, setTheme] = useState(themes.purple);
  const [currentTheme, setCurrentTheme] = useState('purple');
  
  const toggleTheme = (otherTheme: string) => {
    let newTheme;

    switch (otherTheme) {
      case 'yellow':
        newTheme = themes.yellow;
        break;
      case 'red':
        newTheme = themes.red;
        break;
      case 'black':
        newTheme = themes.black;
        break;
      default:
        newTheme = themes.purple;
        break;
    }

    setCurrentTheme(otherTheme);
    setTheme(newTheme);
    setStatusBarBackgroundColor(newTheme.primaryColor);
  }

  return (
    <ThemeContext.Provider 
      value={{currentTheme: currentTheme, colors: theme, toggleTheme: toggleTheme}}
    >
      {children}
    </ThemeContext.Provider>
  );
}