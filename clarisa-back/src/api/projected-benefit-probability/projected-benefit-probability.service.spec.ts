import { Test, TestingModule } from '@nestjs/testing';
import { ProjectedBenefitProbabilityService } from './projected-benefit-probability.service';

describe('ProjectedBenefitProbabilityService', () => {
  let service: ProjectedBenefitProbabilityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectedBenefitProbabilityService],
    }).compile();

    service = module.get<ProjectedBenefitProbabilityService>(ProjectedBenefitProbabilityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
