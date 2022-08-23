import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from './../src/app.module';


describe('AppController (e2e)', () => {
  let app = 'http://localhost:3000';

  /*beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      //imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });*/

  it('/api/sdgs (GET)', () => {
    return request(app)
      .get('/api/sdgs')
      .then((res)=>{
        console.log(res.body);
        expect(res.status).toBe(200);
        expect(res.body).toStrictEqual([]);
      });
  });

  it('/api/regions/get/1 (GET)', () => {
    return request(app)
      .get('/api/regions/get/'+1)
      .then((res)=>{
        console.log(res.body);
        expect(res.status).toBe(200);
        expect(res.body).toStrictEqual(
          {
            "id": "1",
            "iso_numeric": 1,
            "name": "Central and West Asia and North Africa",
            "acronym": "CWANA",
            "region_type_id": "1",
            "parent_id": null
          }
        );
      });
  });
});
