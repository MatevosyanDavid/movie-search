const loadState = key => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return
  }
}

const saveState = (key, state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (err) {

  }
}

export {
  loadState,
  saveState,
}
