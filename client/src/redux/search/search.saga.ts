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
import { getPokemonByName } from '../entities/entities.selectors';

// ****************
// WORKERS
// ****************
export function* findPokemon() {
  try {
    const query: string = yield select(getQuery);
    const pokemonFromExistingState = yield select(getPokemonByName(query));

    /* 
      Becuase the state gets persisted in localStorage, lets not make real api calls if we don't have to 
    */
    if (pokemonFromExistingState) {
      yield put<SearchActions>(
        fetchPokemonSuccess(pokemonFromExistingState.id),
      );
      return;
    }

    const response: AxiosResponse<PokemonDTO> = yield call(
      ApiClient.search,
      query,
    );

    const id: number = yield syncEntitiesAndGetResults(
      response,
      SCHEMA.pokemon,
    );

    yield put<SearchActions>(fetchPokemonSuccess(id));
  } catch (err) {
    // Server returns 404 when no pokemon is found, which is not an error
    if (err.response.status === 404) {
      yield put<SearchActions>(fetchPokemonSuccess(undefined));
      return;
    }

    yield put<SearchActions>(
      fetchPokemonFailed(err.response.data.message || err.message),
    );
  }
}

// ****************
// WATCHERS
// ****************
export function* watchSearchSagas() {
  yield takeLatest(FETCH_POKEMON_REQUESTED, findPokemon);
}
