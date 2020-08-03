import {
  SearchActions,
  UPDATE_QUERY,
  FETCH_POKEMON_SUCCESS,
} from './search.actions';
import { merge } from 'lodash';

export interface SearchState {
  query: string;
  result?: number;
}

const initalState: SearchState = {
  query: '',
};

export default (
  state: SearchState = initalState,
  action: SearchActions,
): SearchState => {
  switch (action.type) {
    case FETCH_POKEMON_SUCCESS: {
      return merge(state, { result: action.payload });
    }
    case UPDATE_QUERY: {
      return {
        ...state,
        query: action.payload,
      };
    }
    default:
      return state;
  }
};
