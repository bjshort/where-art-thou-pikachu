import { getConnection } from 'typeorm';
import { TestingModule, Test } from '@nestjs/testing';
import { AppModule } from '../../src/app.module';
import { ValidationPipe, BadRequestException } from '@nestjs/common';
import { StaticModuleResolver } from './staticModuleResolver';

/* Bootraps the nest application for testing, allows injection of mock services */
export const initTestApp = async () => {
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule],
  }).compile();

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
