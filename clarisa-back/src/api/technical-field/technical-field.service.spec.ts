import { Test, TestingModule } from '@nestjs/testing';
import { TechnicalFieldService } from './technical-field.service';

describe('TechnicalFieldService', () => {
  let service: TechnicalFieldService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TechnicalFieldService],
    }).compile();

    service = module.get<TechnicalFieldService>(TechnicalFieldService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
