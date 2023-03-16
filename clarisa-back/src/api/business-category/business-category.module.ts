import { Module } from '@nestjs/common';
import { BusinessCategoryService } from './business-category.service';
import { BusinessCategoryController } from './business-category.controller';
import { BusinessCategoryRepository } from './repositories/business-category.repository';

@Module({
  controllers: [BusinessCategoryController],
  providers: [BusinessCategoryService, BusinessCategoryRepository],
})
export class BusinessCategoryModule {}
