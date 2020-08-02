import { Test, TestingModule } from '@nestjs/testing';
import { PokemonService } from './pokemon.service';
import { PokeApiService } from '../poke-api/poke-api.service';
import { ShakespeareTranslatorService } from '../shakespeare-translator/shakespeare-translator.service';
import { ConfigModule } from '@nestjs/config';

describe('PokemonService', () => {
  let service: PokemonService;

  beforeEach(async () => {
    const shakespeareTranslatorService = {
      translate: async () => {
        return {
          success: { total: 1 },
          contents: {
            translated: 'thee did translate ye text',
            text: 'Testing',
            translation: 'testing',
          },
        };
      },
    };

    const pokeApiService = {
      getPokemon: async () => {
        return {
          id: 0,
          name: 'Testasaurus',
          species: {
            name: 'Testasaurus',
          },
          sprites: {
            front_default: 'https://images.com',
          },
        };
      },
      getSpecies: async () => {
        return {
          description:
            'A strange prehistoric bird with a tedious yet essential nature.',
        };
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot({})],
      providers: [PokemonService, PokeApiService, ShakespeareTranslatorService],
    })
      .overrideProvider(ShakespeareTranslatorService)
      .useValue(shakespeareTranslatorService)
      .overrideProvider(PokeApiService)
      .useValue(pokeApiService)
      .compile();

    service = module.get<PokemonService>(PokemonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('.get', () => {
    it('Should get the pokemon', async () => {
      const result = await service.get('Testasaurus');
      expect(result.id).toEqual(0);
      expect(result.name).toEqual('Testasaurus');
      expect(result.description.original).toEqual(
        'A strange prehistoric bird with a tedious yet essential nature.',
      );
      expect(result.description.shakespeare).toEqual(
        'thee did translate ye text',
      );
      expect(result.imageUrl).toEqual('https://images.com');
    });
  });
});
