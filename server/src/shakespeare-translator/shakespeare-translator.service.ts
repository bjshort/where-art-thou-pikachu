import { Injectable, HttpService } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TranslationResponseDTO } from './translation-response.dto';
import { AxiosResponse } from 'axios';
import { appendToFile } from '../../test/utils/file-utils';

@Injectable()
export class ShakespeareTranslatorService {
  private headers: { [key: string]: string };

  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {
    const apiKey = this.configService.get('FUN_TRANSLATIONS_API_KEY');

    console.log('Api key inconstrucotr: ', apiKey);

    if (apiKey) {
      this.headers = {
        'X-Funtranslations-Api-Secret': apiKey,
      };
    }
  }

  async translate(text: string): Promise<TranslationResponseDTO> {
    const url = `${this.configService.get(
      'FUN_TRANSLATIONS_BASE_URL',
    )}/translate/shakespeare.json?text=${encodeURIComponent(text)}`;

    const response: AxiosResponse<TranslationResponseDTO> = await this.httpService
      .post<TranslationResponseDTO>(url, null, {
        headers: this.headers,
      })
      .toPromise();

    return response.data;
  }
}
