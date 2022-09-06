import { Test, TestingModule } from '@nestjs/testing';
import { OneCgiarUserController } from './one-cgiar-user.controller';
import { OneCgiarUserService } from './one-cgiar-user.service';

describe('OneCgiarUserController', () => {
  let controller: OneCgiarUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OneCgiarUserController],
      providers: [OneCgiarUserService],
    }).compile();

    controller = module.get<OneCgiarUserController>(OneCgiarUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
