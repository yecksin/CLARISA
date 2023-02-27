import { Test, TestingModule } from '@nestjs/testing';
import { OldInstitutionService } from './old-institution.service';

describe('OldInstitutionService', () => {
  let service: OldInstitutionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OldInstitutionService],
    }).compile();

    service = module.get<OldInstitutionService>(OldInstitutionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
