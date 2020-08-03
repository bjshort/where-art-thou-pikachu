export const UPDATE_QUERY = 'SEARCH/UPDATE_QUERY';
export const FETCH_POKEMON_REQUESTED = 'SEARCH/FETCH_POKEMON_REQUESTED';
export const FETCH_POKEMON_FAILED = 'SEARCH/FETCH_POKEMON_FAILED';
export const FETCH_POKEMON_SUCCESS = 'SEARCH/FETCH_POKEMON_SUCCESS';

export function updateQuery(query: string) {
  return {
    type: UPDATE_QUERY,
    payload: query,
  } as const;
}

export function fetchPokemonRequested() {
  return {
    type: FETCH_POKEMON_REQUESTED,
  } as const;
}

export function fetchPokemonFailed(error: string) {
  return {
    type: FETCH_POKEMON_FAILED,
    payload: error,
  } as const;
}

export function fetchPokemonSuccess(id: string) {
  return {
    type: FETCH_POKEMON_SUCCESS,
    payload: id,
  } as const;
}

export type SearchActions = ReturnType<
  | typeof updateQuery
  | typeof fetchPokemonRequested
  | typeof fetchPokemonFailed
  | typeof fetchPokemonSuccess
>;
