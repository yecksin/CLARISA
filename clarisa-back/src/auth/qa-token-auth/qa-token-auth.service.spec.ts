import { Test, TestingModule } from '@nestjs/testing';
import { QaTokenAuthService } from './qa-token-auth.service';

describe('QaTokenAuthService', () => {
  let service: QaTokenAuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QaTokenAuthService],
    }).compile();

    service = module.get<QaTokenAuthService>(QaTokenAuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
