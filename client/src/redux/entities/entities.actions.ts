import { EntityState } from './entities.reducer';

export const UPDATE_ENTITIES = 'ENTITIES/UPDATE_ENTITIES';

export function updateEntities(payload: EntityState) {
  return {
    type: UPDATE_ENTITIES,
    payload,
  } as const;
}

export type EntityActionTypes = ReturnType<typeof updateEntities>;
