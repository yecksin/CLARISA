import { Test, TestingModule } from '@nestjs/testing';
import { EndOfInitiativeOutcomeService } from './end-of-initiative-outcome.service';

describe('EndOfInitiativeOutcomeService', () => {
  let service: EndOfInitiativeOutcomeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EndOfInitiativeOutcomeService],
    }).compile();

    service = module.get<EndOfInitiativeOutcomeService>(
      EndOfInitiativeOutcomeService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
