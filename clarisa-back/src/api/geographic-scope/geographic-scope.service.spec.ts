import { Test, TestingModule } from '@nestjs/testing';
import { GeographicScopeService } from './geographic-scope.service';

describe('GeographicScopeService', () => {
  let service: GeographicScopeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GeographicScopeService],
    }).compile();

    service = module.get<GeographicScopeService>(GeographicScopeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
