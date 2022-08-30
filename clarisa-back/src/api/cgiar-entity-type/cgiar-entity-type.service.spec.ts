import { Test, TestingModule } from '@nestjs/testing';
import { CgiarEntityTypeService } from './cgiar-entity-type.service';

describe('CgiarEntityTypeService', () => {
  let service: CgiarEntityTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CgiarEntityTypeService],
    }).compile();

    service = module.get<CgiarEntityTypeService>(CgiarEntityTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
