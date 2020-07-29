import { initTestApp } from './utils/bootstrap';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

describe('PokemonController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    app = await initTestApp();
  });

  afterAll(async () => {
    await Promise.all([app.close()]);
  });

  describe('[GET] /pokemon/:name', () => {
    it('Sucessfully returns CHARIZARD description', () => {
      return request(app.getHttpServer())
        .get(`/pokemon/charizard`)
        .expect(200)
        .then(res => {
          console.log(res.body);
        });
    });
  });
});
