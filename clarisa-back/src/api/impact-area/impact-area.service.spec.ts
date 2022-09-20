import { Test, TestingModule } from '@nestjs/testing';
import { ImpactAreaService } from './impact-area.service';

describe('ImpactAreaService', () => {
  let service: ImpactAreaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImpactAreaService],
    }).compile();

    service = module.get<ImpactAreaService>(ImpactAreaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
