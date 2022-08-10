import { Test, TestingModule } from '@nestjs/testing';
import { ProjectedBenefitService } from './projected-benefit.service';

describe('ProjectedBenefitService', () => {
  let service: ProjectedBenefitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectedBenefitService],
    }).compile();

    service = module.get<ProjectedBenefitService>(ProjectedBenefitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
