import { Module } from '@nestjs/common';
import { HomepageClarisaCategoryEndpointService } from './homepage-clarisa-category-endpoint.service';
import { HomepageClarisaCategoryEndpointController } from './homepage-clarisa-category-endpoint.controller';
import { HomepageClarisaCategoryEndpointRepository } from './repositories/homepage-clarisa-category-endpoint.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HomepageClarisaCategoryEndpoint } from './entities/homepage-clarisa-category-endpoint.entity';
import { HomepageClarisaCategory } from '../homepage-clarisa-category/entities/homepage-clarisa-category.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      HomepageClarisaCategoryEndpoint,
      HomepageClarisaCategory,
    ]),
  ],
  controllers: [HomepageClarisaCategoryEndpointController],
  providers: [
    HomepageClarisaCategoryEndpointService,
    HomepageClarisaCategoryEndpointRepository,
  ],
})
export class HomepageClarisaCategoryEndpointModule {}
