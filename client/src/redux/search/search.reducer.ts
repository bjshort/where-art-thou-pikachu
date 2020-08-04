import {
  SearchActions,
  UPDATE_QUERY,
  FETCH_POKEMON_SUCCESS,
  TOGGLE_TRANSLATION,
} from './search.actions';

export interface SearchState {
  query: string;
  result?: number;

  showShakespeareanTranslation: boolean;
}

const initalState: SearchState = {
  query: '',
  showShakespeareanTranslation: true,
};

export default (
  state: SearchState = initalState,
  action: SearchActions,
): SearchState => {
  switch (action.type) {
    case FETCH_POKEMON_SUCCESS: {
      return {
        ...state,
        result: +action.payload,
        showShakespeareanTranslation: true,
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
