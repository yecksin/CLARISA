import { Test, TestingModule } from '@nestjs/testing';
import { StudyTypeController } from './study-type.controller';
import { StudyTypeService } from './study-type.service';

describe('StudyTypeController', () => {
  let controller: StudyTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudyTypeController],
      providers: [StudyTypeService],
    }).compile();

    controller = module.get<StudyTypeController>(StudyTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
