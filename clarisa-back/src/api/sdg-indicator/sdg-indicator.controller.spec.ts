import { Test, TestingModule } from '@nestjs/testing';
import { SdgIndicatorController } from './sdg-indicator.controller';
import { SdgIndicatorService } from './sdg-indicator.service';

describe('SdgIndicatorController', () => {
  let controller: SdgIndicatorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SdgIndicatorController],
      providers: [SdgIndicatorService],
    }).compile();

    controller = module.get<SdgIndicatorController>(SdgIndicatorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
