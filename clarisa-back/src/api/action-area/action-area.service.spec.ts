import { Test, TestingModule } from '@nestjs/testing';
import { ActionAreaService } from './action-area.service';

describe('ActionAreaService', () => {
  let service: ActionAreaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActionAreaService],
    }).compile();

    service = module.get<ActionAreaService>(ActionAreaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
