import { Test, TestingModule } from '@nestjs/testing';
import { HomepageClarisaEndpointController } from './homepage-clarisa-endpoint.controller';
import { HomepageClarisaEndpointService } from './homepage-clarisa-endpoint.service';

describe('HomepageClarisaEndpointController', () => {
  let controller: HomepageClarisaEndpointController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HomepageClarisaEndpointController],
      providers: [HomepageClarisaEndpointService],
    }).compile();

    controller = module.get<HomepageClarisaEndpointController>(
      HomepageClarisaEndpointController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
