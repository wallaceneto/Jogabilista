export type IToggleButtonProps = {
  text: string,
  isPressed: boolean,
  setIsPressed: (value: boolean) => void,
  children: React.ReactNode,
};
