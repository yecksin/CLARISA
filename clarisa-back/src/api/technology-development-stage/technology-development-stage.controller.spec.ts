import { Test, TestingModule } from '@nestjs/testing';
import { TechnologyDevelopmentStageController } from './technology-development-stage.controller';
import { TechnologyDevelopmentStageService } from './technology-development-stage.service';

describe('TechnologyDevelopmentStageController', () => {
  let controller: TechnologyDevelopmentStageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TechnologyDevelopmentStageController],
      providers: [TechnologyDevelopmentStageService],
    }).compile();

    controller = module.get<TechnologyDevelopmentStageController>(TechnologyDevelopmentStageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
