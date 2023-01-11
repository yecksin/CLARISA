import { Test, TestingModule } from '@nestjs/testing';
import { BiParameterService } from './bi-parameter.service';

describe('BiParameterService', () => {
  let service: BiParameterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BiParameterService],
    }).compile();

    service = module.get<BiParameterService>(BiParameterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
