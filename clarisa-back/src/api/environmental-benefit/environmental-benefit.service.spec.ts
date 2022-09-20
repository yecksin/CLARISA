import { Test, TestingModule } from '@nestjs/testing';
import { EnvironmentalBenefitService } from './environmental-benefit.service';

describe('EnvironmentalBenefitService', () => {
  let service: EnvironmentalBenefitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnvironmentalBenefitService],
    }).compile();

    service = module.get<EnvironmentalBenefitService>(
      EnvironmentalBenefitService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
