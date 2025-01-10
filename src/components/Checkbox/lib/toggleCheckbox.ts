const toggleCheckbox = (
  value: boolean, 
  setChecked: (value: boolean) => void,
  checkAction?: () => void,
  uncheckAction?: () => void,
) => {
    setChecked(value);

    if (value) {
      if (checkAction) checkAction();
    } else {
      if (uncheckAction) uncheckAction();
    }
}

export { toggleCheckbox }