import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ShakespeareTranslatorModule } from './shakespeare-translator/shakespeare-translator.module';
import { PokeApiModule } from './poke-api/poke-api.module';
import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ShakespeareTranslatorModule,
    PokeApiModule,
    PokemonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
