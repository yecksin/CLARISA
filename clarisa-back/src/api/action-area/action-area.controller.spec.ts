import { Test, TestingModule } from '@nestjs/testing';
import { ActionAreaController } from './action-area.controller';
import { ActionAreaService } from './action-area.service';

describe('ActionAreaController', () => {
  let controller: ActionAreaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActionAreaController],
      providers: [ActionAreaService],
    }).compile();

    controller = module.get<ActionAreaController>(ActionAreaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
