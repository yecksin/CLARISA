import { Test, TestingModule } from '@nestjs/testing';
import { EndOfInitiativeOutcomeController } from './end-of-initiative-outcome.controller';
import { EndOfInitiativeOutcomeService } from './end-of-initiative-outcome.service';

describe('EndOfInitiativeOutcomeController', () => {
  let controller: EndOfInitiativeOutcomeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EndOfInitiativeOutcomeController],
      providers: [EndOfInitiativeOutcomeService],
    }).compile();

    controller = module.get<EndOfInitiativeOutcomeController>(
      EndOfInitiativeOutcomeController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
