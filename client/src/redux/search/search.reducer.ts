import {
  SearchActions,
  UPDATE_QUERY,
  FETCH_POKEMON_SUCCESS,
  TOGGLE_TRANSLATION,
  FETCH_POKEMON_REQUESTED,
  FETCH_POKEMON_FAILED,
} from './search.actions';

export interface SearchState {
  query: string;
  result?: number;

  showShakespeareanTranslation: boolean;
  isSearching: boolean;
  errorMessage?: string;
}

const initalState: SearchState = {
  query: '',
  showShakespeareanTranslation: true,
  isSearching: false,
};

export default (
  state: SearchState = initalState,
  action: SearchActions,
): SearchState => {
  switch (action.type) {
    case FETCH_POKEMON_REQUESTED: {
      return {
        ...state,
        result: undefined,
        isSearching: true,
        errorMessage: undefined,
      };
    }
    case FETCH_POKEMON_FAILED: {
      return {
        ...state,
        result: undefined,
        isSearching: false,
        errorMessage: action.payload,
      };
    }
    case FETCH_POKEMON_SUCCESS: {
      return {
        ...state,
        result: action.payload,
        showShakespeareanTranslation: true,
        isSearching: false,
        errorMessage: undefined,
      };
    }
    case UPDATE_QUERY: {
      return {
        ...state,
        query: action.payload,
      };
    }
    case TOGGLE_TRANSLATION: {
      return {
        ...state,
        showShakespeareanTranslation: !state.showShakespeareanTranslation,
      };
    }
    default:
      return state;
  }
};
