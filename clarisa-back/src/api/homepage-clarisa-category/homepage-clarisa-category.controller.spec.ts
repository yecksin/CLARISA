import { Test, TestingModule } from '@nestjs/testing';
import { HomepageClarisaCategoryController } from './homepage-clarisa-category.controller';
import { HomepageClarisaCategoryService } from './homepage-clarisa-category.service';

describe('HomepageClarisaCategoryController', () => {
  let controller: HomepageClarisaCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HomepageClarisaCategoryController],
      providers: [HomepageClarisaCategoryService],
    }).compile();

    controller = module.get<HomepageClarisaCategoryController>(HomepageClarisaCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
