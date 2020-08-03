import { AppState } from '../root.reducer';

export const getQuery = (state: AppState) => state.search.query;
