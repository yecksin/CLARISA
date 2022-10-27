import { Test, TestingModule } from '@nestjs/testing';
import { HomepageClarisaCategoryEndpointService } from './homepage-clarisa-category-endpoint.service';

describe('HomepageClarisaCategoryEndpointService', () => {
  let service: HomepageClarisaCategoryEndpointService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HomepageClarisaCategoryEndpointService],
    }).compile();

    service = module.get<HomepageClarisaCategoryEndpointService>(
      HomepageClarisaCategoryEndpointService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
