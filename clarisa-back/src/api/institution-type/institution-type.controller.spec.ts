import { Test, TestingModule } from '@nestjs/testing';
import { InstitutionTypeController } from './institution-type.controller';
import { InstitutionTypeService } from './institution-type.service';

describe('InstitutionTypeController', () => {
  let controller: InstitutionTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InstitutionTypeController],
      providers: [InstitutionTypeService],
    }).compile();

    controller = module.get<InstitutionTypeController>(InstitutionTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
