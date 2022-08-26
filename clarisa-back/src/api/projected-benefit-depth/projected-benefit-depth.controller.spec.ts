import { Test, TestingModule } from '@nestjs/testing';
import { ProjectedBenefitDepthController } from './projected-benefit-depth.controller';
import { ProjectedBenefitDepthService } from './projected-benefit-depth.service';

describe('ProjectedBenefitDepthController', () => {
  let controller: ProjectedBenefitDepthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectedBenefitDepthController],
      providers: [ProjectedBenefitDepthService],
    }).compile();

    controller = module.get<ProjectedBenefitDepthController>(ProjectedBenefitDepthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
