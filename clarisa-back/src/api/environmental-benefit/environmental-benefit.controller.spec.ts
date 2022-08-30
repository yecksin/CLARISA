import { Test, TestingModule } from '@nestjs/testing';
import { EnvironmentalBenefitController } from './environmental-benefit.controller';
import { EnvironmentalBenefitService } from './environmental-benefit.service';

describe('EnvironmentalBenefitController', () => {
  let controller: EnvironmentalBenefitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnvironmentalBenefitController],
      providers: [EnvironmentalBenefitService],
    }).compile();

    controller = module.get<EnvironmentalBenefitController>(EnvironmentalBenefitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
