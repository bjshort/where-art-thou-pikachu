import { combineReducers } from 'redux';
import searchReducer from './search/search.reducer';
import entitiesReducer from './entities/entities.reducer';

const appReducer = () => {
  return combineReducers({
    search: searchReducer,
    entities: entitiesReducer,
  });
};

const rootReducer = (state: any, action: any) => appReducer()(state, action);
export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
