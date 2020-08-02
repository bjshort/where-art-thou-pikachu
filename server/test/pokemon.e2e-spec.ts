import { initTestApp } from './utils/bootstrap';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

describe('PokemonController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    /* 
      Normally for e2e tests we would want real API calls for all external services, 
      but due to limits on the translation API we mock those requests by default (5 per hour). 
      Setting mockTranslations to false will enable real translations.
    */
    app = await initTestApp({ mockTranslations: true });
  });

  afterAll(async () => {
    await Promise.all([app.close()]);
  });

  describe('[GET] /pokemon/:name', () => {
    it('Successfully returns CHARIZARD', () => {
      return request(app.getHttpServer())
        .get(`/pokemon/charizard`)
        .expect(200)
        .then(res => {
          expect(res.body).toEqual({
            id: 6,
            name: 'charizard',
            description: {
              original:
                'Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally.',
              shakespeare:
                'Spits fire yond is hot enow to melt boulders. Known to cause forest fires unintentionally.',
            },
            imageUrl:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
          });
        });
    });

    it('Successfully returns PIKACHU', () => {
      return request(app.getHttpServer())
        .get(`/pokemon/pikachu`)
        .expect(200)
        .then(res => {
          expect(res.body).toEqual({
            id: 25,
            name: 'pikachu',
            description: {
              original:
                'When several of these POKéMON gather, their electricity could build and cause lightning storms.',
              shakespeare:
                'At which hour several of these pokémon gather,  their electricity couldst buildeth and cause lightning storms.',
            },
            imageUrl:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
          });
        });
    });

    it('Successfully returns BULBASAUR', () => {
      return request(app.getHttpServer())
        .get(`/pokemon/bulbasaur`)
        .expect(200)
        .then(res => {
          expect(res.body).toEqual({
            id: 1,
            name: 'bulbasaur',
            description: {
              original:
                'A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON.',
              shakespeare:
                'A strange seed wast planted on its back at birth. The plant sprouts and grows with this pokémon.',
            },
            imageUrl:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
          });
        });
    });

    it('Successfully returns FENNEKIN', () => {
      return request(app.getHttpServer())
        .get(`/pokemon/fennekin`)
        .expect(200)
        .then(res => {
          expect(res.body).toEqual({
            id: 653,
            name: 'fennekin',
            description: {
              original:
                'Eating a twig fills it with energy, and its roomy ears give vent to air hotter than 390 degrees Fahrenheit.',
              shakespeare:
                "Eating a twig fills 't with energy,  and its roomy ears giveth vent to air hotter than 390 degrees fahrenheit.",
            },
            imageUrl:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/653.png',
          });
        });
    });

    it('Successfully returns CHIMECHO', () => {
      return request(app.getHttpServer())
        .get(`/pokemon/chimecho`)
        .expect(200)
        .then(res => {
          expect(res.body).toEqual({
            id: 358,
            name: 'chimecho',
            description: {
              original:
                'CHIMECHO makes its cries echo inside its hollow body. When this POKéMON becomes enraged, its cries result in ultrasonic waves that have the power to knock foes flying.',
              shakespeare:
                "Chimecho maketh its cries bruit inside its hollow corse. At which hour this pokémon becomes enraged,  its cries result in ultrasonic waves yond hath't the power to knap foes flying.",
            },
            imageUrl:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/358.png',
          });
        });
    });

    it('Returns 404 if Pokemon does not exist', () => {
      return request(app.getHttpServer())
        .get(`/pokemon/nope`)
        .expect(404);
    });
  });
});
