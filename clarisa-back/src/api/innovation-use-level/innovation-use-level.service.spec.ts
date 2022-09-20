import { Test, TestingModule } from '@nestjs/testing';
import { InnovationUseLevelService } from './innovation-use-level.service';

describe('InnovationUseLevelService', () => {
  let service: InnovationUseLevelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InnovationUseLevelService],
    }).compile();

    service = module.get<InnovationUseLevelService>(InnovationUseLevelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
