import { Test, TestingModule } from '@nestjs/testing';
import { BiParameterController } from './bi-parameter.controller';
import { BiParameterService } from './bi-parameter.service';

describe('BiParameterController', () => {
  let controller: BiParameterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BiParameterController],
      providers: [BiParameterService],
    }).compile();

    controller = module.get<BiParameterController>(BiParameterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
