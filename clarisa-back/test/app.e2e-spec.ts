import { TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { testModule, usePipes } from './test.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await testModule.compile();

    app = moduleFixture.createNestApplication();
    usePipes(app);
    await app.init();
  });

  it('/api/sdgs (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/sdgs')
      .then((res) => {
        expect(res.status).toBe(200);
        expect(res.body).toBeInstanceOf(Array);
      });
  });

/*  it('/api/regions/get/1 (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/regions/get/' + 1)
      .expect(200)
      .expect((res) => {
        const data = res.body
        expect(data).toHaveProperty("id");
        expect(data).toHaveProperty("iso_numeric");
        expect(data).toHaveProperty("name");
      });
  });*/

  afterAll(async () => {
    await app.close();
  });
});
