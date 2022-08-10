import { Test, TestingModule } from '@nestjs/testing';
import { OutcomeIndicatorService } from './outcome-indicator.service';

describe('OutcomeIndicatorService', () => {
  let service: OutcomeIndicatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OutcomeIndicatorService],
    }).compile();

    service = module.get<OutcomeIndicatorService>(OutcomeIndicatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
