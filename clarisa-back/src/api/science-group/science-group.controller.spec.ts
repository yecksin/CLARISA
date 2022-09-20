import { Test, TestingModule } from '@nestjs/testing';
import { ScienceGroupController } from './science-group.controller';
import { ScienceGroupService } from './science-group.service';

describe('ScienceGroupController', () => {
  let controller: ScienceGroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScienceGroupController],
      providers: [ScienceGroupService],
    }).compile();

    controller = module.get<ScienceGroupController>(ScienceGroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
