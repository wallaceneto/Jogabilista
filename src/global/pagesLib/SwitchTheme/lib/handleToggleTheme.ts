import { router } from "expo-router";

const handleToggleTheme = (
  current: string,
  setLoading: (value: boolean) => void,
  toggleTheme: (value: string) => void
) => {
  setLoading(true);

  setTimeout(() => {
    router.navigate('/(tabs)');
    toggleTheme(current);
  }, 100);

}

export { handleToggleTheme };
