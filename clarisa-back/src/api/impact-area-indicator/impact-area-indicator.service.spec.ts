import { Test, TestingModule } from '@nestjs/testing';
import { ImpactAreaIndicatorService } from './impact-area-indicator.service';

describe('ImpactAreaIndicatorService', () => {
  let service: ImpactAreaIndicatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImpactAreaIndicatorService],
    }).compile();

    service = module.get<ImpactAreaIndicatorService>(
      ImpactAreaIndicatorService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
