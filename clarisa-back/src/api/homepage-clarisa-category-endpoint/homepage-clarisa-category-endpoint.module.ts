import { Module } from '@nestjs/common';
import { HomepageClarisaCategoryEndpointService } from './homepage-clarisa-category-endpoint.service';
import { HomepageClarisaCategoryEndpointController } from './homepage-clarisa-category-endpoint.controller';
import { HomepageClarisaCategoryEndpointRepository } from './repositories/homepage-clarisa-category-endpoint.repository';
import { HomepageClarisaCategoryRepository } from '../homepage-clarisa-category/repositories/homepage-clarisa-category.repository';

@Module({
  controllers: [HomepageClarisaCategoryEndpointController],
  providers: [
    HomepageClarisaCategoryEndpointService,
    HomepageClarisaCategoryEndpointRepository,
    HomepageClarisaCategoryRepository,
  ],
})
export class HomepageClarisaCategoryEndpointModule {}
