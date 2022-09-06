import { Test, TestingModule } from '@nestjs/testing';
import { GeneralAcronymController } from './general-acronym.controller';
import { GeneralAcronymService } from './general-acronym.service';

describe('GeneralAcronymController', () => {
  let controller: GeneralAcronymController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GeneralAcronymController],
      providers: [GeneralAcronymService],
    }).compile();

    controller = module.get<GeneralAcronymController>(GeneralAcronymController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
