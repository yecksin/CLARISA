import { Test, TestingModule } from '@nestjs/testing';
import { ProjectedBenefitWeightingController } from './projected-benefit-weighting.controller';
import { ProjectedBenefitWeightingService } from './projected-benefit-weighting.service';

describe('ProjectedBenefitWeightingController', () => {
  let controller: ProjectedBenefitWeightingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectedBenefitWeightingController],
      providers: [ProjectedBenefitWeightingService],
    }).compile();

    controller = module.get<ProjectedBenefitWeightingController>(
      ProjectedBenefitWeightingController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
