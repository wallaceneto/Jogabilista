import { KeyboardTypeOptions, NativeSyntheticEvent, TextInputFocusEventData } from "react-native";

export type ITextFieldProps = {
  value: string,
  onTextChange: (value: string) => void,
  placeholder?: string,
  maxCharacters?: number,
  type?: KeyboardTypeOptions,
  errorMsg?: string,
  onFocus?: () => void
  onBlur?: () => void
};
