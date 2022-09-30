import { Test, TestingModule } from '@nestjs/testing';
import { HomepageClarisaEndpointService } from './homepage-clarisa-endpoint.service';

describe('HomepageClarisaEndpointService', () => {
  let service: HomepageClarisaEndpointService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HomepageClarisaEndpointService],
    }).compile();

    service = module.get<HomepageClarisaEndpointService>(HomepageClarisaEndpointService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
