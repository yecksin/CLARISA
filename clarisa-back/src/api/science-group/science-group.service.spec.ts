import { Test, TestingModule } from '@nestjs/testing';
import { ScienceGroupService } from './science-group.service';

describe('ScienceGroupService', () => {
  let service: ScienceGroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScienceGroupService],
    }).compile();

    service = module.get<ScienceGroupService>(ScienceGroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
