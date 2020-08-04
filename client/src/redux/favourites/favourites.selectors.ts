import { AppState } from '../root.reducer';
import { PokemonDTO } from '../../api-client/pokemon.dto';

export const getFavouritePokemon = (state: AppState): PokemonDTO[] => {
  const favouriteIds = Object.keys(state.favourites.pokemon);
  return favouriteIds.map((id) => state.entities.pokemon[id]);
};
