import { KeyboardTypeOptions } from "react-native";

export type ITextFieldProps = {
  value: string,
  onTextChange: (value: string) => void,
  placeholder?: string,
  maxCharacters?: number,
  type?: KeyboardTypeOptions,
  errorMsg?: string,
};
