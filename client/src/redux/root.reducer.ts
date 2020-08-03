import { combineReducers } from 'redux';
import searchReducer from './search/search.reducer';

const appReducer = () => {
  return combineReducers({
    search: searchReducer,
  });
};

const rootReducer = (state: any, action: any) => appReducer()(state, action);
export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
