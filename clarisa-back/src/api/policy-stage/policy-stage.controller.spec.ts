import { Test, TestingModule } from '@nestjs/testing';
import { PolicyStageController } from './policy-stage.controller';
import { PolicyStageService } from './policy-stage.service';

describe('PolicyStageController', () => {
  let controller: PolicyStageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PolicyStageController],
      providers: [PolicyStageService],
    }).compile();

    controller = module.get<PolicyStageController>(PolicyStageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
