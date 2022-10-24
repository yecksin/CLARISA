import { Test, TestingModule } from '@nestjs/testing';
import { InstitutionTypeService } from './institution-type.service';

describe('InstitutionTypeService', () => {
  let service: InstitutionTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InstitutionTypeService],
    }).compile();

    service = module.get<InstitutionTypeService>(InstitutionTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
