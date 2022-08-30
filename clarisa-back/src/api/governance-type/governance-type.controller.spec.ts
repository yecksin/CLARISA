import { Test, TestingModule } from '@nestjs/testing';
import { GovernanceTypeController } from './governance-type.controller';
import { GovernanceTypeService } from './governance-type.service';

describe('GovernanceTypeController', () => {
  let controller: GovernanceTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GovernanceTypeController],
      providers: [GovernanceTypeService],
    }).compile();

    controller = module.get<GovernanceTypeController>(GovernanceTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
