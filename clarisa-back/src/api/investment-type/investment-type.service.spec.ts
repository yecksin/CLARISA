import { Test, TestingModule } from '@nestjs/testing';
import { InvestmentTypeService } from './investment-type.service';

describe('InvestmentTypeService', () => {
  let service: InvestmentTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InvestmentTypeService],
    }).compile();

    service = module.get<InvestmentTypeService>(InvestmentTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
