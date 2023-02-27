import { Test, TestingModule } from '@nestjs/testing';
import { OldInstitutionController } from './old-institution.controller';
import { OldInstitutionService } from './old-institution.service';

describe('OldInstitutionController', () => {
  let controller: OldInstitutionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OldInstitutionController],
      providers: [OldInstitutionService],
    }).compile();

    controller = module.get<OldInstitutionController>(OldInstitutionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
