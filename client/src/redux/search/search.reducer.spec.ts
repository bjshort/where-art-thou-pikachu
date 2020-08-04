import { DeepPartial } from 'redux';

import reducer, { SearchState } from './search.reducer';
import {
  UPDATE_QUERY,
  FETCH_POKEMON_SUCCESS,
  TOGGLE_TRANSLATION,
  FETCH_POKEMON_REQUESTED,
  FETCH_POKEMON_FAILED,
} from './search.actions';

describe('Search Reducer', () => {
  const initialState: DeepPartial<SearchState> = {
    query: '',
    showShakespeareanTranslation: true,
    isSearching: false,
  };

  it('should handle UPDATE_QUERY', () => {
    expect(
      reducer(undefined, {
        type: UPDATE_QUERY,
        payload: 'hello',
      }),
    ).toEqual({
      ...initialState,
      query: 'hello',
    });
  });

  it('should handle FETCH_POKEMON_REQUESTED', () => {
    expect(
      reducer(undefined, {
        type: FETCH_POKEMON_REQUESTED,
      }),
    ).toEqual({
      ...initialState,
      isSearching: true,
    });
  });

  it('should handle FETCH_POKEMON_SUCCESS', () => {
    expect(
      reducer(undefined, {
        type: FETCH_POKEMON_SUCCESS,
        payload: 123,
      }),
    ).toEqual({
      ...initialState,
      result: 123,
    });
  });

  it('should handle FETCH_POKEMON_FAILED', () => {
    expect(
      reducer(undefined, {
        type: FETCH_POKEMON_FAILED,
        payload: 'Whoops',
      }),
    ).toEqual({
      ...initialState,
      errorMessage: 'Whoops',
    });
  });

  it('should handle TOGGLE_TRANSLATION', () => {
    expect(
      reducer(undefined, {
        type: TOGGLE_TRANSLATION,
      }),
    ).toEqual({
      ...initialState,
      showShakespeareanTranslation: false,
    });
  });
});
