import { Test, TestingModule } from '@nestjs/testing';
import { EndOfInitiativeOutcomesController } from './end-of-initiative-outcomes.controller';
import { EndOfInitiativeOutcomesService } from './end-of-initiative-outcomes.service';

describe('EndOfInitiativeOutcomesController', () => {
  let controller: EndOfInitiativeOutcomesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EndOfInitiativeOutcomesController],
      providers: [EndOfInitiativeOutcomesService],
    }).compile();

    controller = module.get<EndOfInitiativeOutcomesController>(
      EndOfInitiativeOutcomesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
