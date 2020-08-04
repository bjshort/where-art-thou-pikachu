import { combineReducers } from 'redux';
import searchReducer from './search/search.reducer';
import entitiesReducer from './entities/entities.reducer';
import favouritesReducer from './favourites/favourites.reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootPersistConfig = {
  key: 'root',
  storage,
};

const favouritesPersistConfig = {
  key: 'favourites',
  storage,
};

const appReducer = () => {
  return combineReducers({
    search: searchReducer,
    entities: entitiesReducer,
    favourites: persistReducer(favouritesPersistConfig, favouritesReducer),
  });
};

const rootReducer = (state: any, action: any) => appReducer()(state, action);
export type AppState = ReturnType<typeof rootReducer>;

export default persistReducer(rootPersistConfig, rootReducer);
