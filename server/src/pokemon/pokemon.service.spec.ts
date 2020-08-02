import { Test, TestingModule } from '@nestjs/testing';
import { PokemonService } from './pokemon.service';
import { PokeApiService } from '../poke-api/poke-api.service';
import { ShakespeareTranslatorService } from '../shakespeare-translator/shakespeare-translator.service';
import { ConfigModule } from '@nestjs/config';
import { ShakespeareTranslatorServiceMock } from '../../test/mocks/shakespeare-translator/shakespeare-translator-service.mock';
import { PokeApiServiceMock } from '../../test/mocks/poke-api/poke-api-service.mock';

describe('PokemonService', () => {
  let service: PokemonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot({})],
      providers: [PokemonService, PokeApiService, ShakespeareTranslatorService],
    })
      .overrideProvider(ShakespeareTranslatorService)
      .useClass(ShakespeareTranslatorServiceMock)
      .overrideProvider(PokeApiService)
      .useClass(PokeApiServiceMock)
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
        'A strange bird with a tedious yet essential nature.',
      );
      expect(result.description.shakespeare).toEqual(
        'thee did translate ye text',
      );
      expect(result.imageUrl).toEqual('https://images.com');
    });
  });
});
