import { Test, TestingModule } from '@nestjs/testing';
import { BeneficiarieController } from './beneficiarie.controller';
import { BeneficiarieService } from './beneficiarie.service';

describe('BeneficiarieController', () => {
  let controller: BeneficiarieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BeneficiarieController],
      providers: [BeneficiarieService],
    }).compile();

    controller = module.get<BeneficiarieController>(BeneficiarieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
