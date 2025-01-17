export type ITextFieldProps = {
  text: string,
  onTextChange: (value: string) => void,
  placeholder?: string,
  maxCharacters?: number,
};
