import { Test, TestingModule } from '@nestjs/testing';
import { GlobalTargetService } from './global-target.service';

describe('GlobalTargetService', () => {
  let service: GlobalTargetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GlobalTargetService],
    }).compile();

    service = module.get<GlobalTargetService>(GlobalTargetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
