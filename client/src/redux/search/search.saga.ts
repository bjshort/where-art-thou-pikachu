import { put, takeLatest, select, call } from 'redux-saga/effects';
import { getQuery } from './search.selectors';
import { AxiosResponse } from 'axios';
import { PokemonDTO } from '../../api-client/pokemon.dto';
import { ApiClient } from '../../api-client';
import {
  SearchActions,
  fetchPokemonFailed,
  fetchPokemonSuccess,
  FETCH_POKEMON_REQUESTED,
} from './search.actions';
import SCHEMA from '../schema';
import { syncEntitiesAndGetResults } from '../entities/entities.saga';

// ****************
// WORKERS
// ****************
export function* findPokemon() {
  try {
    const query: string = yield select(getQuery);

    const response: AxiosResponse<PokemonDTO> = yield call(
      ApiClient.search,
      query,
    );

    const id: string = yield syncEntitiesAndGetResults(
      response,
      SCHEMA.pokemon,
    );

    yield put<SearchActions>(fetchPokemonSuccess(id));
  } catch (err) {
    console.error(err);
    yield put<SearchActions>(fetchPokemonFailed(err));
  }
}

// ****************
// WATCHERS
// ****************
export function* watchSearchSagas() {
  yield takeLatest(FETCH_POKEMON_REQUESTED, findPokemon);
}
