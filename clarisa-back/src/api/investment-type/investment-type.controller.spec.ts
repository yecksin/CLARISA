import { Test, TestingModule } from '@nestjs/testing';
import { InvestmentTypeController } from './investment-type.controller';
import { InvestmentTypeService } from './investment-type.service';

describe('InvestmentTypeController', () => {
  let controller: InvestmentTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InvestmentTypeController],
      providers: [InvestmentTypeService],
    }).compile();

    controller = module.get<InvestmentTypeController>(InvestmentTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
