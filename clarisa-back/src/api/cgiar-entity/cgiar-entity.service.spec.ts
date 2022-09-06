import { Test, TestingModule } from '@nestjs/testing';
import { CgiarEntityService } from './cgiar-entity.service';

describe('CgiarEntityService', () => {
  let service: CgiarEntityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CgiarEntityService],
    }).compile();

    service = module.get<CgiarEntityService>(CgiarEntityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
