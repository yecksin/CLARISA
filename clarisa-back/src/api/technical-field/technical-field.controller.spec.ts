import { Test, TestingModule } from '@nestjs/testing';
import { TechnicalFieldController } from './technical-field.controller';
import { TechnicalFieldService } from './technical-field.service';

describe('TechnicalFieldController', () => {
  let controller: TechnicalFieldController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TechnicalFieldController],
      providers: [TechnicalFieldService],
    }).compile();

    controller = module.get<TechnicalFieldController>(TechnicalFieldController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
