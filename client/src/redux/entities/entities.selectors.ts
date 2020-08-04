import { AppState } from '../root.reducer';

export const getPokemonById = (id?: number) => (state: AppState) => {
  if (!id || !state.entities.pokemon) return undefined;
  return state.entities.pokemon[id];
};

/* 
  In production we would redesign the store so that pokemon could also be looked up by name without
  looping through the existing object. We would also have an object that had name keys and id values */
export const getPokemonByName = (name: string) => (state: AppState) => {
  return Object.values(state.entities.pokemon).find(
    (pokemon) => pokemon.name.toLowerCase() === name.toLowerCase(),
  );
};
