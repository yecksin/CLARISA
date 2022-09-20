import { Test, TestingModule } from '@nestjs/testing';
import { InnovationReadinessLevelService } from './innovation-readiness-level.service';

describe('InnovationReadinessLevelService', () => {
  let service: InnovationReadinessLevelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InnovationReadinessLevelService],
    }).compile();

    service = module.get<InnovationReadinessLevelService>(
      InnovationReadinessLevelService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
