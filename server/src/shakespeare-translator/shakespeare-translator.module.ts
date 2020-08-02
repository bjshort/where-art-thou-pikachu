import { Module, HttpModule } from '@nestjs/common';
import { ShakespeareTranslatorService } from './shakespeare-translator.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  providers: [ShakespeareTranslatorService],
  exports: [ShakespeareTranslatorService],
})
export class ShakespeareTranslatorModule {}
