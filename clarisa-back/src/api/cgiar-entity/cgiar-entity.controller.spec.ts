import { Test, TestingModule } from '@nestjs/testing';
import { CgiarEntityController } from './cgiar-entity.controller';
import { CgiarEntityService } from './cgiar-entity.service';

describe('CgiarEntityController', () => {
  let controller: CgiarEntityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CgiarEntityController],
      providers: [CgiarEntityService],
    }).compile();

    controller = module.get<CgiarEntityController>(CgiarEntityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
