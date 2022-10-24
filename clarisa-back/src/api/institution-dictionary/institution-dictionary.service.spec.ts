import { Test, TestingModule } from '@nestjs/testing';
import { InstitutionDictionaryService } from './institution-dictionary.service';

describe('InstitutionDictionaryService', () => {
  let service: InstitutionDictionaryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InstitutionDictionaryService],
    }).compile();

    service = module.get<InstitutionDictionaryService>(InstitutionDictionaryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
