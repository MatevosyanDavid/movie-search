import { saveState } from "utils";

export const updateFavorites = (data, favorites, action) => {
  const { id, isFavorites } = action.payload;
  const idx = favorites.findIndex(item => item.id === id);

  return data.map(item => {
    if(item.id === id) {
      item.isFavorites = isFavorites;
      isFavorites
        ? favorites.push(item)
        : favorites.splice(idx, 1);
    }
    saveState('favorites', favorites);
    return item;
  });
}