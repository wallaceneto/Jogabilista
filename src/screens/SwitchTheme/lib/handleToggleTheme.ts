import { NavigationProps } from "../../../global/types";
import { storeTheme } from "../../../storage/asyncStorage";

const handleToggleTheme = (
  current: string,
  setLoading: (value: boolean) => void,
  toggleTheme: (value: string) => void,
  navigation: NavigationProps,
) => {
  setLoading(true);

  setTimeout(() => {
    toggleTheme(current);
    storeTheme(current);
    navigation.popTo('Homepage');
  }, 100);

}

export { handleToggleTheme };
