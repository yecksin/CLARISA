import { Test, TestingModule } from '@nestjs/testing';
import { QaTokenAuthController } from './qa-token-auth.controller';
import { QaTokenAuthService } from './qa-token-auth.service';

describe('QaTokenAuthController', () => {
  let controller: QaTokenAuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QaTokenAuthController],
      providers: [QaTokenAuthService],
    }).compile();

    controller = module.get<QaTokenAuthController>(QaTokenAuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
