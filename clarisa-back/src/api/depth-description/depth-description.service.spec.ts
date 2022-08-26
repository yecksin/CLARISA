import { Test, TestingModule } from '@nestjs/testing';
import { DepthDescriptionService } from './depth-description.service';

describe('DepthDescriptionService', () => {
  let service: DepthDescriptionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DepthDescriptionService],
    }).compile();

    service = module.get<DepthDescriptionService>(DepthDescriptionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
