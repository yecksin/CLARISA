import { Test, TestingModule } from '@nestjs/testing';
import { StudyTypeService } from './study-type.service';

describe('StudyTypeService', () => {
  let service: StudyTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudyTypeService],
    }).compile();

    service = module.get<StudyTypeService>(StudyTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
