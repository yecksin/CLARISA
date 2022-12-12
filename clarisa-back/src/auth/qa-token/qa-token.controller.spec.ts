import { Test, TestingModule } from '@nestjs/testing';
import { QaTokenController } from './qa-token.controller';
import { QaTokenService } from './qa-token.service';

describe('QaTokenController', () => {
  let controller: QaTokenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QaTokenController],
      providers: [QaTokenService],
    }).compile();

    controller = module.get<QaTokenController>(QaTokenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
