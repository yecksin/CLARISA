import { Test, TestingModule } from '@nestjs/testing';
import { GeneralAcronymService } from './general-acronym.service';

describe('GeneralAcronymService', () => {
  let service: GeneralAcronymService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GeneralAcronymService],
    }).compile();

    service = module.get<GeneralAcronymService>(GeneralAcronymService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
