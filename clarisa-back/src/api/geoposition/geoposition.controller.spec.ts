import { Test, TestingModule } from '@nestjs/testing';
import { GeopositionController } from './geoposition.controller';
import { GeopositionService } from './geoposition.service';

describe('GeopositionController', () => {
  let controller: GeopositionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GeopositionController],
      providers: [GeopositionService],
    }).compile();

    controller = module.get<GeopositionController>(GeopositionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
