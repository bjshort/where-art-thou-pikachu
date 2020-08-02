import { Injectable, HttpService } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TranslationResponseDTO } from './translation-response.dto';
import { AxiosResponse } from 'axios';
import { appendToFile } from '../../test/utils/file-utils';

@Injectable()
export class ShakespeareTranslatorService {
  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {}

  async translate(text: string): Promise<TranslationResponseDTO> {
    const url = `${this.configService.get(
      'FUN_TRANSLATIONS_BASE_URL',
    )}/translate/shakespeare.json?text=${encodeURIComponent(text)}`;

    try {
      const response: AxiosResponse<TranslationResponseDTO> = await this.httpService
        .post<TranslationResponseDTO>(url, null, {
          headers: {
            'X-Funtranslations-Api-Secret': this.configService.get(
              'FUN_TRANSLATIONS_API_KEY',
            ),
          },
        })
        .toPromise();

      return response.data;
    } catch (err) {
      if (err.response && err.response.status == 429) {
        throw new Error(
          `Exceeded Translation API request limit. Please mock if possible. "${err.response.data.error.message}"`,
        );
      }
      throw err;
    }
  }
}
