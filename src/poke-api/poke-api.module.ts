import { Module } from '@nestjs/common';
import { PokeApiService } from './poke-api.service';
import * as Pokedex from 'pokedex-promise-v2';

@Module({
  providers: [
    PokeApiService,
    {
      provide: 'POKEDEX',
      useValue: new Pokedex(),
    },
  ],
  exports: [PokeApiService],
})
export class PokeApiModule {}
