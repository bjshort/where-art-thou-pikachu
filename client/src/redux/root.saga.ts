import { all } from 'redux-saga/effects';
import * as SearchSagas from './search/search.saga';

export default function* rootSaga() {
  yield all([SearchSagas.watchSearchSagas()]);
}
