import { Test, TestingModule } from '@nestjs/testing';
import { ProjectedBenefitWeightingService } from './projected-benefit-weighting.service';

describe('ProjectedBenefitWeightingService', () => {
  let service: ProjectedBenefitWeightingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectedBenefitWeightingService],
    }).compile();

    service = module.get<ProjectedBenefitWeightingService>(
      ProjectedBenefitWeightingService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
