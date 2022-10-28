import { Test, TestingModule } from '@nestjs/testing';
import { InnovationCharacteristicService } from './innovation-characteristic.service';

describe('InnovationCharacteristicService', () => {
  let service: InnovationCharacteristicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InnovationCharacteristicService],
    }).compile();

    service = module.get<InnovationCharacteristicService>(
      InnovationCharacteristicService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
