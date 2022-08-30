import { Test, TestingModule } from '@nestjs/testing';
import { BeneficiarieService } from './beneficiarie.service';

describe('BeneficiarieService', () => {
  let service: BeneficiarieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BeneficiarieService],
    }).compile();

    service = module.get<BeneficiarieService>(BeneficiarieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
