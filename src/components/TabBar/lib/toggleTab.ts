import { router } from "expo-router";

const toggleTab = (toGo: number, path: string, current?: number) => {
  return current === toGo ? null : router.replace(path);
}

export { toggleTab };
