import { Test, TestingModule } from '@nestjs/testing';
import { GovernanceTypeService } from './governance-type.service';

describe('GovernanceTypeService', () => {
  let service: GovernanceTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GovernanceTypeService],
    }).compile();

    service = module.get<GovernanceTypeService>(GovernanceTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
