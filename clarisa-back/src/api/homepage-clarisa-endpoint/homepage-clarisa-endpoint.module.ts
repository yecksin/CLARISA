import { Module } from '@nestjs/common';
import { HomepageClarisaEndpointService } from './homepage-clarisa-endpoint.service';
import { HomepageClarisaEndpointController } from './homepage-clarisa-endpoint.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HomepageClarisaEndpoint } from './entities/homepage-clarisa-endpoint.entity';
import { HomepageClarisaEndpointRepository } from './repositories/homepage-clarisa-endpoint.repository';

@Module({
  controllers: [HomepageClarisaEndpointController],
  providers: [
    HomepageClarisaEndpointService,
    HomepageClarisaEndpointRepository,
  ],
})
export class HomepageClarisaEndpointModule {}
