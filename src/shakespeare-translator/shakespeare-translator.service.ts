import { Injectable, HttpService, LoggerService } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AdvancedConsoleLogger } from 'typeorm';
import { TranslationResponseDTO } from './translation-response.dto';

@Injectable()
export class ShakespeareTranslatorService {
  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {}

  async translate(text: string): Promise<TranslationResponseDTO> {
    const url = `${this.configService.get(
      'FUN_TRANSLATIONS_BASE_URL',
    )}/translate/shakespeare.json?text=${JSON.stringify(text)}`;

    try {
      const response = await this.httpService.post(url).toPromise();
      return response.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}
