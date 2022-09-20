import { Test, TestingModule } from '@nestjs/testing';
import { InnovationTypeController } from './innovation-type.controller';
import { InnovationTypeService } from './innovation-type.service';

describe('InnovationTypeController', () => {
  let controller: InnovationTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InnovationTypeController],
      providers: [InnovationTypeService],
    }).compile();

    controller = module.get<InnovationTypeController>(InnovationTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
