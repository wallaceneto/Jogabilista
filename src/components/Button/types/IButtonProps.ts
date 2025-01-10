import { GestureResponderEvent, StyleProp, ViewStyle } from "react-native";

export type IButtonProps = {
  children: React.ReactNode,
  style?: StyleProp<ViewStyle>,
  onPress?: (event: GestureResponderEvent) => void
};
