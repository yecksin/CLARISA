import { Test, TestingModule } from '@nestjs/testing';
import { InnovationReadinessLevelController } from './innovation-readiness-level.controller';
import { InnovationReadinessLevelService } from './innovation-readiness-level.service';

describe('InnovationReadinessLevelController', () => {
  let controller: InnovationReadinessLevelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InnovationReadinessLevelController],
      providers: [InnovationReadinessLevelService],
    }).compile();

    controller = module.get<InnovationReadinessLevelController>(InnovationReadinessLevelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
