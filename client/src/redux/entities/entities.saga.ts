import { Schema, normalize } from 'normalizr';
import { put } from 'redux-saga/effects';

import { EntityActionTypes, updateEntities } from './entities.actions';

export function* syncEntitiesAndGetResults(data: any, schema: Schema<any>) {
  const { entities, result } = normalize(data, schema);

  yield put<EntityActionTypes>(updateEntities(entities));

  return result;
}
