import { Test, TestingModule } from '@nestjs/testing';
import { OutcomeIndicatorController } from './outcome-indicator.controller';
import { OutcomeIndicatorService } from './outcome-indicator.service';

describe('OutcomeIndicatorController', () => {
  let controller: OutcomeIndicatorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OutcomeIndicatorController],
      providers: [OutcomeIndicatorService],
    }).compile();

    controller = module.get<OutcomeIndicatorController>(OutcomeIndicatorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
