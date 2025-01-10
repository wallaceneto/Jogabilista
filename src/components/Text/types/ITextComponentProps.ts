import { StyleProp, TextStyle } from "react-native";

export type ITextComponentProps = {
  children: React.ReactNode,
  style?: StyleProp<TextStyle>
  light?: boolean,
  size?: number,
  weight?: 'regular' | 'medium' | 'bold' | 'semibold' | 'light',
};
