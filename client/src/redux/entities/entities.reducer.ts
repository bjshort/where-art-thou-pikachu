import { PokemonDTO } from '../../api-client/pokemon.dto';
import { EntityActionTypes, UPDATE_ENTITIES } from './entities.actions';
import { merge } from 'lodash';
import { combineReducers, AnyAction } from 'redux';

export interface EntityState {
  pokemon: { [key: string]: PokemonDTO };
}

export const initialState: EntityState = {
  pokemon: {},
};

export default (
  state: EntityState = initialState,
  action: EntityActionTypes,
) => {
  switch (action.type) {
    case UPDATE_ENTITIES:
      return merge({}, state, action.payload);
  }

  return combineReducers<EntityState>({
    pokemon: (state: any = {}, action: AnyAction) => state,
  })(state, action);
};
