import { Injectable, HttpService } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TranslationResponseDTO } from './translation-response.dto';
import { AxiosResponse } from 'axios';

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
      const response: AxiosResponse<TranslationResponseDTO> = await this.httpService
        .post<TranslationResponseDTO>(url)
        .toPromise();

      return {
        ...response.data,
        contents: {
          translated: JSON.parse(response.data.contents.translated),
          text: JSON.parse(response.data.contents.text),
          translation: response.data.contents.translation,
        },
      };
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}
