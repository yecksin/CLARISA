import { Test, TestingModule } from '@nestjs/testing';
import { ProjectedBenefitProbabilityController } from './projected-benefit-probability.controller';
import { ProjectedBenefitProbabilityService } from './projected-benefit-probability.service';

describe('ProjectedBenefitProbabilityController', () => {
  let controller: ProjectedBenefitProbabilityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectedBenefitProbabilityController],
      providers: [ProjectedBenefitProbabilityService],
    }).compile();

    controller = module.get<ProjectedBenefitProbabilityController>(ProjectedBenefitProbabilityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
