import { Test, TestingModule } from '@nestjs/testing';
import { GlobalTargetsService } from './global_targets.service';

describe('GlobalTargetsService', () => {
  let service: GlobalTargetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GlobalTargetsService],
    }).compile();

    service = module.get<GlobalTargetsService>(GlobalTargetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
