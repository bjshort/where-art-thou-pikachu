import { Test, TestingModule } from '@nestjs/testing';
import { ShakespeareTranslatorService } from './shakespeare-translator.service';
import { defaultMaxListeners } from 'stream';
import { HttpModule, HttpService } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
const fs = require('fs');
const Path = require('path');

describe('ShakespeareTranslatorService', () => {
  let service: ShakespeareTranslatorService;

  beforeEach(async () => {
    // Mock HTTP module to prevent making real calls
    const HttpServiceProvider = {
      provide: HttpService,
      useClass: HttpServiceMock,
    };

    const module: TestingModule = await Test.createTestingModule({
      imports: [/*HttpModule, */ ConfigModule.forRoot({})],
      providers: [ShakespeareTranslatorService, HttpServiceProvider],
    }).compile();

    service = module.get<ShakespeareTranslatorService>(
      ShakespeareTranslatorService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('.translate', () => {
    it('Should correctly translate', async () => {
      const translation = await service.translate(
        'You gave Mr. Tim a hearty meal, but unfortunately what he ate made him die.',
      );

      expect(translation.success.total).toEqual(1);
      expect(translation.contents.translated).toEqual(
        '"thee did giveth mr. Tim a hearty meal,  but unfortunately what he did doth englut did maketh him kicketh the bucket."',
      );
      expect(translation.contents.text).toEqual(
        '"You gave Mr. Tim a hearty meal, but unfortunately what he ate made him die."',
      );
      expect(translation.contents.translation).toEqual('shakespeare');
    });
  });
});

class HttpServiceMock {
  post(path: string) {
    const exampleTranslation = fs.readFileSync(
      Path.join(__dirname, './example-response.json'),
      {
        encoding: 'utf8',
      },
    );
    const data = JSON.parse(exampleTranslation);
    const mockApiResponse = { data };

    return { toPromise: async () => mockApiResponse };
  }
}
