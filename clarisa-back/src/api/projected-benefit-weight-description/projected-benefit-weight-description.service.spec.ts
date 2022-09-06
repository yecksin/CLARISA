import { Test, TestingModule } from '@nestjs/testing';
import { ProjectedBenefitWeightDescriptionService } from './projected-benefit-weight-description.service';

describe('ProjectedBenefitWeightDescriptionService', () => {
  let service: ProjectedBenefitWeightDescriptionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectedBenefitWeightDescriptionService],
    }).compile();

    service = module.get<ProjectedBenefitWeightDescriptionService>(ProjectedBenefitWeightDescriptionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
