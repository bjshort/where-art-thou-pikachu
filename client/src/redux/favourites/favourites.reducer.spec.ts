import { DeepPartial } from 'redux';

import reducer, { FavouritesState } from './favourites.reducer';
import { ADD, REMOVE } from './favourites.actions';

describe('Favourites Reducer', () => {
  const initialState: DeepPartial<FavouritesState> = {
    pokemon: {},
  };

  it('should handle ADD', () => {
    expect(
      reducer(undefined, {
        type: ADD,
        payload: 3,
      }).pokemon[3],
    ).toHaveProperty('added');
  });

  it('should handle REMOVE', () => {
    expect(
      reducer(undefined, {
        type: REMOVE,
        payload: 3,
      }),
    ).toEqual({
      ...initialState,
      pokemon: {},
    });
  });
});
