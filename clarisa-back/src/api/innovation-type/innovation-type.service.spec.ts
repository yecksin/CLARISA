import { Test, TestingModule } from '@nestjs/testing';
import { InnovationTypeService } from './innovation-type.service';

describe('InnovationTypeService', () => {
  let service: InnovationTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InnovationTypeService],
    }).compile();

    service = module.get<InnovationTypeService>(InnovationTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
