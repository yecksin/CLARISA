import { Test, TestingModule } from '@nestjs/testing';
import { PolicyTypeController } from './policy-type.controller';
import { PolicyTypeService } from './policy-type.service';

describe('PolicyTypeController', () => {
  let controller: PolicyTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PolicyTypeController],
      providers: [PolicyTypeService],
    }).compile();

    controller = module.get<PolicyTypeController>(PolicyTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
