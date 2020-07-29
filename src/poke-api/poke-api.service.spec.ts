import { Test, TestingModule } from '@nestjs/testing';
import { PokeApiService } from './poke-api.service';
import * as Pokedex from 'pokedex-promise-v2';

const fs = require('fs');
const Path = require('path');

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
        { name: 'charizard', species: 'charizard' },
        { name: 'bulbasaur', species: 'bulbasaur' },
        { name: 'pikachu', species: 'pikachu' },
      ];

      await Promise.all(
        testCases.map(async test => {
          const result = await service.getSpecies(test.name);

          expect(result.name).toEqual(test.name);
          expect(Array.isArray(result.flavor_text_entries)).toBe(true);
        }),
      );
    });

    it('Should throw 404 if name is not an exact match or does not exist', async () => {
      const testCases = ['charizar', 'ulbasaur', 'madeupachoo'];

      await Promise.all(
        testCases.map(async test => {
          await expect(service.getSpecies(test)).rejects.toEqual(
            new Error('Request failed with status code 404'),
          );
        }),
      );
    });
  });

  describe('.getPokemonDescriptionByName', () => {
    it('Should get the description', async () => {
      const testCases = [
        {
          name: 'charizard',
          description:
            'Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally.',
        },
        {
          name: 'bulbasaur',
          description:
            'A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON.',
        },
        {
          name: 'pikachu',
          description:
            'When several of these POKéMON gather, their electricity could build and cause lightning storms.',
        },
      ];

      await Promise.all(
        testCases.map(async test => {
          const result = await service.getPokemonDescriptionByName(test.name);

          expect(result).toEqual(test.description);
        }),
      );
    });

    it('Should throw 404 if name is not an exact match or does not exist', async () => {
      const testCases = ['charizar', 'ulbasaur', 'madeupachoo'];

      await Promise.all(
        testCases.map(async test => {
          await expect(
            service.getPokemonDescriptionByName(test),
          ).rejects.toEqual(new Error('Request failed with status code 404'));
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

class PokedexMock {
  getPokemonByName(name) {
    return this.getFromFileByName(name, './example-get-pokemon-results.json');
  }

  getPokemonSpeciesByName(name) {
    return this.getFromFileByName(name, './example-get-species-results.json');
  }

  private getFromFileByName(name, fileName) {
    const file = Path.join(__dirname, fileName);
    const exampleTranslation = fs.readFileSync(file, {
      encoding: 'utf8',
    });
    const data = JSON.parse(exampleTranslation) as any[];

    switch (name) {
      case 'pikachu': {
        return data[0];
      }
      case 'bulbasaur': {
        return data[1];
      }
      case 'charizard': {
        return data[2];
      }
      default:
        throw new Error('Request failed with status code 404');
    }
  }
}

/* Util function - Useful for collecting mock search results */
function appendToFile(fileName: string, result: any) {
  const file = Path.join(__dirname, fileName);
  const exampleTranslation = fs.readFileSync(file, {
    encoding: 'utf8',
  });
  const data = JSON.parse(exampleTranslation) as [];

  fs.writeFileSync(file, JSON.stringify([...data, result]));
}
