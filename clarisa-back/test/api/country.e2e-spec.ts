import { TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { testModule, usePipes } from '../test.module';

describe('Countries (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await testModule.compile();
    app = moduleFixture.createNestApplication();
    usePipes(app);
    await app.init();
  });

  //It is tested to return a 200 since it is the get all
  it('/api/countries (GET)', () => {
    return request(app.getHttpServer()).get('/api/countries').expect(200);
  });

  //The endpoint is used to search by id, a valid id is sent to it.
  it('/api/countries/get/1 (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/countries/get/' + 1)
      .expect(200)
      .expect((res) => {
        const data = res.body;
        expect(data).toHaveProperty('code');
        expect(data).toHaveProperty('isoAlpha2');
        expect(data).toHaveProperty('isoAlpha3');
        expect(data).toHaveProperty('name');
        expect(data).toHaveProperty('regionDTO');
      });
  });

  //The endpoint is used to search by id, an invalid id is sent to it.
  it('/api/countries/get/a (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/beneficiaries/get/' + 'a')
      .expect(400);
  });

  afterAll(async () => {
    await app.close();
  });
});
