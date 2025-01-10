export type IToggleViewProps = {
  text: string,
  isPressed: boolean,
  setIsPressed: (value: boolean) => void,
  children: React.ReactNode,
};
