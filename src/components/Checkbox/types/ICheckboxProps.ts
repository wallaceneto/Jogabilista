import { StyleProp, ViewStyle } from "react-native";

export type ICheckboxProps = {
  text: string,
  checked?: boolean,
  style?: StyleProp<ViewStyle>
  checkAction?: () => void,
  uncheckAction?: () => void,
};
