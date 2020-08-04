import { runSaga } from '@redux-saga/core';
import { syncEntitiesAndGetResults } from './entities.saga';
import SCHEMA from '../schema';

describe('entities Sagas', () => {
  let dispatchedActions: any[];
  let mockState: any;
  let mockStore: any;

  beforeEach(() => {
    dispatchedActions = [];

    mockState = {};

    mockStore = {
      getState: () => mockState,
      dispatch: (action: any) => dispatchedActions.push(action),
    };
  });
  describe('syncEntitiesAndGetResults', () => {
    it('should dispatch correct actions and return a list of ids', async () => {
      const id = await runSaga(
        mockStore,
        syncEntitiesAndGetResults,
        {
          id: 143,
          name: 'snorlax',
          description: {
            original:
              'Very lazy. Just eats and sleeps. As its rotund bulk builds, it becomes steadily more slothful.',
            shakespeare:
              "Very distemperate. Just engluts and sleeps. As its rotund bulk builds,  't becomes steadily moo slothful.",
          },
          imageUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png',
          height: '6.89',
          weight: '1014.11',
          exp: 189,
        },
        SCHEMA.pokemon,
      ).toPromise();
      expect(dispatchedActions).toMatchSnapshot();
      expect(id).toEqual(143);
    });
  });
});
