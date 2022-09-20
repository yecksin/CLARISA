import { Test, TestingModule } from '@nestjs/testing';
import { GeographicScopeController } from './geographic-scope.controller';
import { GeographicScopeService } from './geographic-scope.service';

describe('GeographicScopeController', () => {
  let controller: GeographicScopeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GeographicScopeController],
      providers: [GeographicScopeService],
    }).compile();

    controller = module.get<GeographicScopeController>(GeographicScopeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
