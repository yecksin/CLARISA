import { Module } from '@nestjs/common';
import { HomepageClarisaCategoryService } from './homepage-clarisa-category.service';
import { HomepageClarisaCategoryController } from './homepage-clarisa-category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HomepageClarisaCategory } from './entities/homepage-clarisa-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HomepageClarisaCategory])],
  controllers: [HomepageClarisaCategoryController],
  providers: [HomepageClarisaCategoryService],
})
export class HomepageClarisaCategoryModule {}
