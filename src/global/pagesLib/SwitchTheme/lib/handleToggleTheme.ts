import { router } from "expo-router";
import { storeTheme } from "../../../../storage/asyncStorage";

const handleToggleTheme = (
  current: string,
  setLoading: (value: boolean) => void,
  toggleTheme: (value: string) => void
) => {
  setLoading(true);

  setTimeout(() => {
    router.navigate('/(tabs)');
    toggleTheme(current);
    storeTheme(current);
  }, 100);

}

export { handleToggleTheme };
