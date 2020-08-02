import { Test, TestingModule } from '@nestjs/testing';
import { ShakespeareTranslatorService } from './shakespeare-translator.service';
import { HttpModule, HttpService } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpServiceMock } from '../../test/mocks/shakespeare-translator/http-service.mock';

describe('ShakespeareTranslatorService', () => {
  let service: ShakespeareTranslatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule, ConfigModule.forRoot({})],
      providers: [ShakespeareTranslatorService],
    })
      .overrideProvider(HttpService)
      .useClass(HttpServiceMock)
      .compile();

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
        'Thee did giveth mr. Tim a hearty meal,  but unfortunately what he did doth englut did maketh him kicketh the bucket.',
      );
      expect(translation.contents.text).toEqual(
        'You gave Mr. Tim a hearty meal, but unfortunately what he ate made him die.',
      );
      expect(translation.contents.translation).toEqual('shakespeare');
    });
  });
});
