import { Test, TestingModule } from '@nestjs/testing';
import { SdgTargetService } from './sdg-target.service';

describe('SdgTargetService', () => {
  let service: SdgTargetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SdgTargetService],
    }).compile();

    service = module.get<SdgTargetService>(SdgTargetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
