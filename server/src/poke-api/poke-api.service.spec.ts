import { Test, TestingModule } from '@nestjs/testing';
import { PokeApiService } from './poke-api.service';
import { PokedexMock } from '../../test/mocks/poke-api/pokedex.mock';

describe('PokeApiService', () => {
  let service: PokeApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PokeApiService,
        {
          provide: 'POKEDEX',
          useValue: new PokedexMock(),
          //useValue: new Pokedex(),
        },
      ],
    }).compile();

    service = module.get<PokeApiService>(PokeApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('.getPokemon', () => {
    it('Should find the pokemon', async () => {
      const testCases = [
        { name: 'charizard', species: 'charizard' },
        { name: 'bulbasaur', species: 'bulbasaur' },
        { name: 'pikachu', species: 'pikachu' },
      ];

      await Promise.all(
        testCases.map(async test => {
          const result = await service.getPokemon(test.name);

          expect(result.name).toEqual(test.name);
          expect(result.species.name).toEqual(test.species);
        }),
      );
    });

    it('Should throw 404 if name is not an exact match or does not exist', async () => {
      const testCases = ['charizar', 'ulbasaur', 'madeupachoo'];

      await Promise.all(
        testCases.map(async test => {
          await expect(service.getPokemon(test)).rejects.toEqual(
            new Error('Request failed with status code 404'),
          );
        }),
      );
    });
  });

  describe('.getSpecies', () => {
    it('Should find the species', async () => {
      const testCases = [
        {
          name: 'charizard',
          species: 'charizard',
          description:
            'Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally.',
        },
        {
          name: 'bulbasaur',
          species: 'bulbasaur',
          description:
            'A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON.',
        },
        {
          name: 'pikachu',
          species: 'pikachu',
          description:
            'When several of these POKéMON gather, their electricity could build and cause lightning storms.',
        },
      ];

      await Promise.all(
        testCases.map(async test => {
          const result = await service.getSpecies(test.name);

          expect(result.name).toEqual(test.name);
          expect(result.description).toEqual(test.description);
        }),
      );
    });

    it('Should throw 404 if name is not an exact match or does not exist', async () => {
      const testCases = ['charizar', 'ulbasaur', 'madeupachoo'];

      await Promise.all(
        testCases.map(async test => {
          await expect(service.getSpecies(test)).rejects.toThrow(
            new Error('Request failed with status code 404'),
          );
        }),
      );
    });
  });

  describe.skip('.getVersions', () => {
    it('Should get the versions', async () => {
      const result = await service.getVersions();

      console.log(result);
    });
  });
});
