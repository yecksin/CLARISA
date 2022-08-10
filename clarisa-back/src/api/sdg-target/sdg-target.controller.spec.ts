import { Test, TestingModule } from '@nestjs/testing';
import { SdgTargetController } from './sdg-target.controller';
import { SdgTargetService } from './sdg-target.service';

describe('SdgTargetController', () => {
  let controller: SdgTargetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SdgTargetController],
      providers: [SdgTargetService],
    }).compile();

    controller = module.get<SdgTargetController>(SdgTargetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
