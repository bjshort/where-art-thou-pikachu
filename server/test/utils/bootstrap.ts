import { getConnection } from 'typeorm';
import { TestingModule, Test, TestingModuleBuilder } from '@nestjs/testing';
import { AppModule } from '../../src/app.module';
import { ValidationPipe, BadRequestException } from '@nestjs/common';
import { StaticModuleResolver } from './staticModuleResolver';
import { ShakespeareTranslatorService } from '../../src/shakespeare-translator/shakespeare-translator.service';
import { ShakespeareTranslatorServiceMock } from '../mocks/shakespeare-translator/shakespeare-translator-service.mock';

/* Bootraps the nest application for testing, allows injection of mock services */
export const initTestApp = async (options: { mockTranslations: boolean }) => {
  const moduleFixtureBuilder: TestingModuleBuilder = await Test.createTestingModule(
    {
      imports: [AppModule],
    },
  );

  // If true, Shakespeare translator api will not be called
  if (options.mockTranslations) {
    moduleFixtureBuilder
      .overrideProvider(ShakespeareTranslatorService)
      .useValue(new ShakespeareTranslatorServiceMock());
  }

  const moduleFixture: TestingModule = await moduleFixtureBuilder.compile();

  const app = moduleFixture.createNestApplication();
  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: errors => new BadRequestException(errors),
      disableErrorMessages: false,
      forbidNonWhitelisted: true,
      validationError: { target: false, value: false },
    }),
  );
  await app.init();

  StaticModuleResolver.setup(app);

  return app;
};

/* Creates a fresh database for testing */
export const initDatabase = async () => {
  try {
    const connection = await getConnection();
    await connection.dropDatabase();
    await connection.runMigrations();
  } catch (err) {
    console.error(err);
    throw err;
  }
};
