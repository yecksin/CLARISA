import { Test, TestingModule } from '@nestjs/testing';
import { ImpactAreaIndicatorsService } from './impact-area-indicators.service';

describe('ImpactAreaIndicatorsService', () => {
  let service: ImpactAreaIndicatorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImpactAreaIndicatorsService],
    }).compile();

    service = module.get<ImpactAreaIndicatorsService>(ImpactAreaIndicatorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
