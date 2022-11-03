import { Test, TestingModule } from '@nestjs/testing';
import { CountryOfficeRequestService } from './country-office-request.service';

describe('CountryOfficeRequestService', () => {
  let service: CountryOfficeRequestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CountryOfficeRequestService],
    }).compile();

    service = module.get<CountryOfficeRequestService>(CountryOfficeRequestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
