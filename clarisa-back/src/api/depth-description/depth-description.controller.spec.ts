import { Test, TestingModule } from '@nestjs/testing';
import { DepthDescriptionController } from './depth-description.controller';
import { DepthDescriptionService } from './depth-description.service';

describe('DepthDescriptionController', () => {
  let controller: DepthDescriptionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DepthDescriptionController],
      providers: [DepthDescriptionService],
    }).compile();

    controller = module.get<DepthDescriptionController>(DepthDescriptionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
