import { SearchActions, UPDATE_QUERY } from './search.actions';

export interface SearchState {
  query: string;
}

const initalState: SearchState = {
  query: '',
};

export default (
  state: SearchState = initalState,
  action: SearchActions,
): SearchState => {
  switch (action.type) {
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
