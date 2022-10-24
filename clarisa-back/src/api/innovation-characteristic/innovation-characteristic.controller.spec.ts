import { Test, TestingModule } from '@nestjs/testing';
import { InnovationCharacteristicController } from './innovation-characteristic.controller';
import { InnovationCharacteristicService } from './innovation-characteristic.service';

describe('InnovationCharacteristicController', () => {
  let controller: InnovationCharacteristicController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InnovationCharacteristicController],
      providers: [InnovationCharacteristicService],
    }).compile();

    controller = module.get<InnovationCharacteristicController>(InnovationCharacteristicController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
