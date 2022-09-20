import { Test, TestingModule } from '@nestjs/testing';
import { ProjectedBenefitDepthService } from './projected-benefit-depth.service';

describe('ProjectedBenefitDepthService', () => {
  let service: ProjectedBenefitDepthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectedBenefitDepthService],
    }).compile();

    service = module.get<ProjectedBenefitDepthService>(
      ProjectedBenefitDepthService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
