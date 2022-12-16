import { Test, TestingModule } from '@nestjs/testing';
import { QaTokenService } from './qa-token.service';

describe('QaTokenService', () => {
  let service: QaTokenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QaTokenService],
    }).compile();

    service = module.get<QaTokenService>(QaTokenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
