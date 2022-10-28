import { Test, TestingModule } from '@nestjs/testing';
import { EndOfInitiativeOutcomesService } from './end-of-initiative-outcomes.service';

describe('EndOfInitiativeOutcomesService', () => {
  let service: EndOfInitiativeOutcomesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EndOfInitiativeOutcomesService],
    }).compile();

    service = module.get<EndOfInitiativeOutcomesService>(
      EndOfInitiativeOutcomesService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
