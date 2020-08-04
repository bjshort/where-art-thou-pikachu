import { FavouritesActions, ADD, REMOVE } from './favourites.actions';

export interface FavouritesState {
  /* 
    We use an object to store favourites because it's more performant to 
    add/remove and we don't want duplicates (Set) 
  */
  pokemon: { [id: number]: any };
}

const initalState: FavouritesState = {
  pokemon: {},
};

export default (
  state: FavouritesState = initalState,
  action: FavouritesActions,
): FavouritesState => {
  switch (action.type) {
    case ADD: {
      const updatedFavourites = {
        ...state.pokemon,
        [action.payload]: { added: new Date() },
      };
      return {
        ...state,
        pokemon: updatedFavourites,
      };
    }
    case REMOVE: {
      const updatedFavourites = { ...state.pokemon };
      delete updatedFavourites[action.payload];

      return { ...state, pokemon: updatedFavourites };
    }
    default:
      return state;
  }
};
