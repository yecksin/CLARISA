import { Module } from '@nestjs/common';
import { HomepageClarisaCategoryService } from './homepage-clarisa-category.service';
import { HomepageClarisaCategoryController } from './homepage-clarisa-category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HomepageClarisaCategory } from './entities/homepage-clarisa-category.entity';
import { HomepageClarisaCategoryRepository } from './repositories/homepage-clarisa-category.repository';

@Module({
  controllers: [HomepageClarisaCategoryController],
  providers: [
    HomepageClarisaCategoryService,
    HomepageClarisaCategoryRepository,
  ],
  exports: [HomepageClarisaCategoryRepository],
})
export class HomepageClarisaCategoryModule {}
