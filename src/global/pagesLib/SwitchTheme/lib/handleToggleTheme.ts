import { router } from "expo-router";
import { storeTheme } from "../../../../storage/asyncStorage";

const handleToggleTheme = (
  current: string,
  setLoading: (value: boolean) => void,
  toggleTheme: (value: string) => void
) => {
  setLoading(true);

  setTimeout(() => {
    toggleTheme(current);
    storeTheme(current);
    router.replace('(tabs)');
  }, 100);

}

export { handleToggleTheme };
