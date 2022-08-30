import { Test, TestingModule } from '@nestjs/testing';
import { TechnologyDevelopmentStageService } from './technology-development-stage.service';

describe('TechnologyDevelopmentStageService', () => {
  let service: TechnologyDevelopmentStageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TechnologyDevelopmentStageService],
    }).compile();

    service = module.get<TechnologyDevelopmentStageService>(TechnologyDevelopmentStageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
