import { Test, TestingModule } from '@nestjs/testing';
import { GlobalTargetsController } from './global_targets.controller';
import { GlobalTargetsService } from './global_targets.service';

describe('GlobalTargetsController', () => {
  let controller: GlobalTargetsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GlobalTargetsController],
      providers: [GlobalTargetsService],
    }).compile();

    controller = module.get<GlobalTargetsController>(GlobalTargetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
