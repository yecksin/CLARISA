import { Test, TestingModule } from '@nestjs/testing';
import { GlobalTargetController } from './global-target.controller';
import { GlobalTargetService } from './global-target.service';

describe('GlobalTargetController', () => {
  let controller: GlobalTargetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GlobalTargetController],
      providers: [GlobalTargetService],
    }).compile();

    controller = module.get<GlobalTargetController>(GlobalTargetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
