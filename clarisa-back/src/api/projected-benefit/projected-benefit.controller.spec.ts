import { Test, TestingModule } from '@nestjs/testing';
import { ProjectedBenefitController } from './projected-benefit.controller';
import { ProjectedBenefitService } from './projected-benefit.service';

describe('ProjectedBenefitController', () => {
  let controller: ProjectedBenefitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectedBenefitController],
      providers: [ProjectedBenefitService],
    }).compile();

    controller = module.get<ProjectedBenefitController>(
      ProjectedBenefitController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
