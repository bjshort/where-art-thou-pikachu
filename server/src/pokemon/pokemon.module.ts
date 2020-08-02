import { Module } from '@nestjs/common';
import { PokemonController } from './pokemon.controller';
import { PokemonService } from './pokemon.service';
import { PokeApiModule } from '../poke-api/poke-api.module';
import { ShakespeareTranslatorModule } from '../shakespeare-translator/shakespeare-translator.module';

@Module({
  imports: [PokeApiModule, ShakespeareTranslatorModule],
  controllers: [PokemonController],
  providers: [PokemonService],
})
export class PokemonModule {}
