import { DeepPartial } from 'redux';

import reducer, { EntityState } from './entities.reducer';
import { UPDATE_ENTITIES } from './entities.actions';

describe('Entities Reducer', () => {
  const initialState: DeepPartial<EntityState> = {
    pokemon: {},
  };

  it('should handle FETCH_REPOSITS_REQUESTED', () => {
    expect(
      reducer(undefined, {
        type: UPDATE_ENTITIES,
        payload: {
          pokemon: {
            '143': {
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
          },
        },
      }),
    ).toEqual({
      ...initialState,
      pokemon: {
        '143': {
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
      },
    });
  });
});
