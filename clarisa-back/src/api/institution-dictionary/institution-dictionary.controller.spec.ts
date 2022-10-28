import { Test, TestingModule } from '@nestjs/testing';
import { InstitutionDictionaryController } from './institution-dictionary.controller';
import { InstitutionDictionaryService } from './institution-dictionary.service';

describe('InstitutionDictionaryController', () => {
  let controller: InstitutionDictionaryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InstitutionDictionaryController],
      providers: [InstitutionDictionaryService],
    }).compile();

    controller = module.get<InstitutionDictionaryController>(
      InstitutionDictionaryController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
