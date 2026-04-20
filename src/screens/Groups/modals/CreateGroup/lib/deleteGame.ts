const deleteGame = (
  deleteDispatch: () => void,
  onClose: () => void,
) => {
  deleteDispatch();
  onClose();
}

export { deleteGame };