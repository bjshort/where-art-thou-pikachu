import { Test, TestingModule, TestingModuleBuilder } from '@nestjs/testing';
import { HttpServiceMock } from './shakespeare-translator/http-service.mock';
import { HttpService } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ShakespeareTranslatorService } from '../../src/shakespeare-translator/shakespeare-translator.service';

export function shakespeareTranslatorTestModule(): TestingModuleBuilder {
  // Mock HTTP module to prevent making real calls
  const HttpServiceProvider = {
    provide: HttpService,
    useClass: HttpServiceMock,
  };

  return Test.createTestingModule({
    imports: [/*HttpModule, */ ConfigModule.forRoot({})],
    providers: [ShakespeareTranslatorService, HttpServiceProvider],
  });
}
