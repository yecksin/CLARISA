import { Test, TestingModule } from '@nestjs/testing';
import { ActionAreaOutcomeService } from './action-area-outcome.service';

describe('ActionAreaOutcomeService', () => {
  let service: ActionAreaOutcomeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActionAreaOutcomeService],
    }).compile();

    service = module.get<ActionAreaOutcomeService>(ActionAreaOutcomeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
