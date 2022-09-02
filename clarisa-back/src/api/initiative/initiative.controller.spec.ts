import { Test, TestingModule } from '@nestjs/testing';
import { InitiativeController } from './initiative.controller';
import { InitiativeService } from './initiative.service';

describe('InitiativeController', () => {
  let controller: InitiativeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InitiativeController],
      providers: [InitiativeService],
    }).compile();

    controller = module.get<InitiativeController>(InitiativeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
