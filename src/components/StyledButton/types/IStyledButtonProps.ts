import { StyleProp, ViewStyle } from "react-native";

export type IStyledButtonProps = {
  onPress: () => void,
  children: React.ReactNode,
  style?: StyleProp<ViewStyle>,
  color?: string,
};
