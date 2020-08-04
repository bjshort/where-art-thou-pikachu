import { runSaga } from '@redux-saga/core';
import { findPokemon } from './search.saga';
import SCHEMA from '../schema';

describe('Search Sagas', () => {
  let dispatchedActions: any[];
  let mockState: any;
  let mockStore: any;

  beforeEach(() => {
    dispatchedActions = [];

    mockState = {
      search: {
        query: 'magikarp',
      },
      entities: {
        pokemon: {
          1234: {
            id: 1234,
            name: 'MAGikarp',
          },
        },
      },
    };

    mockStore = {
      getState: () => mockState,
      dispatch: (action: any) => dispatchedActions.push(action),
    };
  });
  describe('findPokemon', () => {
    it('Gets pokemon from store by name (case insensitive)', async () => {
      await runSaga(mockStore, findPokemon).toPromise();
      expect(dispatchedActions).toMatchSnapshot();
    });
  });
});
