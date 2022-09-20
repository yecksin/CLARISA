import { Test, TestingModule } from '@nestjs/testing';
import { RegionTypeService } from './region-type.service';

describe('RegionTypeService', () => {
  let service: RegionTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegionTypeService],
    }).compile();

    service = module.get<RegionTypeService>(RegionTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
