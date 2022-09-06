import { Test, TestingModule } from '@nestjs/testing';
import { InnovationUseLevelController } from './innovation-use-level.controller';
import { InnovationUseLevelService } from './innovation-use-level.service';

describe('InnovationUseLevelController', () => {
  let controller: InnovationUseLevelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InnovationUseLevelController],
      providers: [InnovationUseLevelService],
    }).compile();

    controller = module.get<InnovationUseLevelController>(InnovationUseLevelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
