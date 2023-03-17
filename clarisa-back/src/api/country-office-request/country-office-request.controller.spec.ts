import { Test, TestingModule } from '@nestjs/testing';
import { CountryOfficeRequestController } from './country-office-request.controller';
import { CountryOfficeRequestService } from './country-office-request.service';

describe('CountryOfficeRequestController', () => {
  let controller: CountryOfficeRequestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CountryOfficeRequestController],
      providers: [CountryOfficeRequestService],
    }).compile();

    controller = module.get<CountryOfficeRequestController>(
      CountryOfficeRequestController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
