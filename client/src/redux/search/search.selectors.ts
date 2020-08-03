import { AppState } from '../root.reducer';

export const getQuery = (state: AppState) => state.search.query;

export const getResult = (state: AppState) => state.search.result;
