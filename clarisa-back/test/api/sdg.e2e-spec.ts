import { TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { testModule, usePipes } from '../test.module';

describe('Sdg (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await testModule.compile();
    app = moduleFixture.createNestApplication();
    usePipes(app);
    await app.init();
  });

  it('/api/sdg/get/1 (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/sdgs/get/' + 1)
      .expect(200)
      .expect((res) => {
        const data = res.body;
        expect(data).toHaveProperty('id');
        expect(data).toHaveProperty('smo_code');
        expect(data).toHaveProperty('short_name');
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
