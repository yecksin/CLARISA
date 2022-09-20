import { Test, TestingModule } from '@nestjs/testing';
import { WorkpackageController } from './workpackage.controller';
import { WorkpackageService } from './workpackage.service';

describe('WorkpackageController', () => {
  let controller: WorkpackageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkpackageController],
      providers: [WorkpackageService],
    }).compile();

    controller = module.get<WorkpackageController>(WorkpackageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
