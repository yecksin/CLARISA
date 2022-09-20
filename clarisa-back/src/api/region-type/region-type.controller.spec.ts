import { Test, TestingModule } from '@nestjs/testing';
import { RegionTypeController } from './region-type.controller';
import { RegionTypeService } from './region-type.service';

describe('RegionTypeController', () => {
  let controller: RegionTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegionTypeController],
      providers: [RegionTypeService],
    }).compile();

    controller = module.get<RegionTypeController>(RegionTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
