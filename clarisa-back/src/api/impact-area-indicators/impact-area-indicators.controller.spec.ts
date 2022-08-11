import { Test, TestingModule } from '@nestjs/testing';
import { ImpactAreaIndicatorsController } from './impact-area-indicators.controller';
import { ImpactAreaIndicatorsService } from './impact-area-indicators.service';

describe('ImpactAreaIndicatorsController', () => {
  let controller: ImpactAreaIndicatorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImpactAreaIndicatorsController],
      providers: [ImpactAreaIndicatorsService],
    }).compile();

    controller = module.get<ImpactAreaIndicatorsController>(ImpactAreaIndicatorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
