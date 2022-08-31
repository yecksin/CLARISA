import { Test, TestingModule } from '@nestjs/testing';
import { WorkpackageService } from './workpackage.service';

describe('WorkpackageService', () => {
  let service: WorkpackageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkpackageService],
    }).compile();

    service = module.get<WorkpackageService>(WorkpackageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
