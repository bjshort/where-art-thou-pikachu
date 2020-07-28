import { Module, HttpModule } from '@nestjs/common';
import { ShakespeareTranslatorService } from './shakespeare-translator.service';

@Module({
  imports: [],
  providers: [ShakespeareTranslatorService],
})
export class ShakespeareTranslatorModule {}
