import { Test, TestingModule } from '@nestjs/testing';
import { ProjectedBenefitWeightDescriptionController } from './projected-benefit-weight-description.controller';
import { ProjectedBenefitWeightDescriptionService } from './projected-benefit-weight-description.service';

describe('ProjectedBenefitWeightDescriptionController', () => {
  let controller: ProjectedBenefitWeightDescriptionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectedBenefitWeightDescriptionController],
      providers: [ProjectedBenefitWeightDescriptionService],
    }).compile();

    controller = module.get<ProjectedBenefitWeightDescriptionController>(ProjectedBenefitWeightDescriptionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
