import { Test, TestingModule } from '@nestjs/testing';
import { CgiarEntityTypeController } from './cgiar-entity-type.controller';
import { CgiarEntityTypeService } from './cgiar-entity-type.service';

describe('CgiarEntityTypeController', () => {
  let controller: CgiarEntityTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CgiarEntityTypeController],
      providers: [CgiarEntityTypeService],
    }).compile();

    controller = module.get<CgiarEntityTypeController>(
      CgiarEntityTypeController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
