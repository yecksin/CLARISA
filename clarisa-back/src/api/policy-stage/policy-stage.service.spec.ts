import { Test, TestingModule } from '@nestjs/testing';
import { PolicyStageService } from './policy-stage.service';

describe('PolicyStageService', () => {
  let service: PolicyStageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PolicyStageService],
    }).compile();

    service = module.get<PolicyStageService>(PolicyStageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
