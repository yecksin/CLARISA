import { Test, TestingModule } from '@nestjs/testing';
import { ImpactAreaIndicatorController } from './impact-area-indicator.controller';
import { ImpactAreaIndicatorService } from './impact-area-indicator.service';

describe('ImpactAreaIndicatorController', () => {
  let controller: ImpactAreaIndicatorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImpactAreaIndicatorController],
      providers: [ImpactAreaIndicatorService],
    }).compile();

    controller = module.get<ImpactAreaIndicatorController>(
      ImpactAreaIndicatorController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
