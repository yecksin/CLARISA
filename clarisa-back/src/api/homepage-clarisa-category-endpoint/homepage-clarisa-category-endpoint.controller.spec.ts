import { Test, TestingModule } from '@nestjs/testing';
import { HomepageClarisaCategoryEndpointController } from './homepage-clarisa-category-endpoint.controller';
import { HomepageClarisaCategoryEndpointService } from './homepage-clarisa-category-endpoint.service';

describe('HomepageClarisaCategoryEndpointController', () => {
  let controller: HomepageClarisaCategoryEndpointController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HomepageClarisaCategoryEndpointController],
      providers: [HomepageClarisaCategoryEndpointService],
    }).compile();

    controller = module.get<HomepageClarisaCategoryEndpointController>(HomepageClarisaCategoryEndpointController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
