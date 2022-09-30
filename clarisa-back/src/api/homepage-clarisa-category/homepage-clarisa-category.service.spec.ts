import { Test, TestingModule } from '@nestjs/testing';
import { HomepageClarisaCategoryService } from './homepage-clarisa-category.service';

describe('HomepageClarisaCategoryService', () => {
  let service: HomepageClarisaCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HomepageClarisaCategoryService],
    }).compile();

    service = module.get<HomepageClarisaCategoryService>(HomepageClarisaCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
