import { Test, TestingModule } from '@nestjs/testing';
import { PokemonController } from './pokemon.controller';

describe('Pokemon Controller', () => {
  let controller: PokemonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PokemonController],
    }).compile();

    controller = module.get<PokemonController>(PokemonController);
  });

  it.skip('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
