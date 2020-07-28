import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ShakespeareTranslatorModule } from './shakespeare-translator/shakespeare-translator.module';
import { PokeApiModule } from './poke-api/poke-api.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({}),
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
    ShakespeareTranslatorModule,
    PokeApiModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
