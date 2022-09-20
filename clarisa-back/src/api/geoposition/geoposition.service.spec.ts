import { Test, TestingModule } from '@nestjs/testing';
import { GeopositionService } from './geoposition.service';

describe('GeopositionService', () => {
  let service: GeopositionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GeopositionService],
    }).compile();

    service = module.get<GeopositionService>(GeopositionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
