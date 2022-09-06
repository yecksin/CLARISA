import { Test, TestingModule } from '@nestjs/testing';
import { OneCgiarUserService } from './one-cgiar-user.service';

describe('OneCgiarUserService', () => {
  let service: OneCgiarUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OneCgiarUserService],
    }).compile();

    service = module.get<OneCgiarUserService>(OneCgiarUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
