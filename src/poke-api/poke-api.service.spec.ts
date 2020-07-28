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
          //useValue: new PokedexMock(),
          useValue: new Pokedex(),
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

      testCases.map(async test => {
        const result = await service.getPokemon(test.name);

        expect(result.name).toEqual(test.name);
        expect(result.species.name).toEqual(test.species);
      });
    });
  });

  describe('.getSpecies', () => {
    it('Should find the species', async () => {
      const testCases = [
        { name: 'charizard', species: 'charizard' },
        { name: 'bulbasaur', species: 'bulbasaur' },
        { name: 'pikachu', species: 'pikachu' },
      ];

      testCases.map(async test => {
        const result = await service.getSpecies(test.name);

        //appendToFile('./example-get-species-results.json', result);

        expect(result.name).toEqual(test.name);
        expect(Array.isArray(result.flavor_text_entries)).toBe(true);

        console.log(result);
      });
    });
  });

  describe('.getPokemonDescriptionByName', () => {
    it('Should get the description', async () => {
      const testCases = [
        { name: 'charizard', species: 'charizard' },
        // { name: 'bulbasaur', species: 'bulbasaur' },
        // { name: 'pikachu', species: 'pikachu' },
      ];

      testCases.map(async test => {
        const result = await service.getPokemonDescriptionByName(test.name);

        console.log(result);
      });
    });
  });

  describe('.getVersions', () => {
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
        throw new Error('404 Not found');
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
