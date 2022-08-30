import { Test, TestingModule } from '@nestjs/testing';
import { SdgIndicatorService } from './sdg-indicator.service';

describe('SdgIndicatorService', () => {
  let service: SdgIndicatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SdgIndicatorService],
    }).compile();

    service = module.get<SdgIndicatorService>(SdgIndicatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
