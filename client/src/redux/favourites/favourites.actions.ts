export const ADD = 'FAVOURITES/ADD';
export const REMOVE = 'FAVOURITES/REMOVE';

export function addToFavourites(id: number) {
  return {
    type: ADD,
    payload: id,
  } as const;
}

export function removeFromFavourites(id: number) {
  return {
    type: REMOVE,
    payload: id,
  } as const;
}

export type FavouritesActions = ReturnType<
  typeof addToFavourites | typeof removeFromFavourites
>;
