import { Test, TestingModule } from '@nestjs/testing';
import { ImpactAreaController } from './impact-area.controller';
import { ImpactAreaService } from './impact-area.service';

describe('ImpactAreaController', () => {
  let controller: ImpactAreaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImpactAreaController],
      providers: [ImpactAreaService],
    }).compile();

    controller = module.get<ImpactAreaController>(ImpactAreaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
