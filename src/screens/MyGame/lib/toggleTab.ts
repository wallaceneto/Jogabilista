import { FlatList } from "react-native";

const toggleTab = (
  flatListRef: React.RefObject<FlatList<any>>,
  tab: number,
) => {
  flatListRef.current?.scrollToIndex({ index: tab });
}

export { toggleTab }