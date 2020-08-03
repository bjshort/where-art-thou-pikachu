import { AppState } from '../root.reducer';

export const getPokemonById = (id?: number) => (state: AppState) => {
  if (!id || !state.entities.pokemon) return undefined;
  return state.entities.pokemon[id];
};
