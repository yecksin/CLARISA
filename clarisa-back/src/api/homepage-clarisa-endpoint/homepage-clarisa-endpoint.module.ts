import { Module } from '@nestjs/common';
import { HomepageClarisaEndpointService } from './homepage-clarisa-endpoint.service';
import { HomepageClarisaEndpointController } from './homepage-clarisa-endpoint.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HomepageClarisaEndpoint } from './entities/homepage-clarisa-endpoint.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HomepageClarisaEndpoint])],
  controllers: [HomepageClarisaEndpointController],
  providers: [HomepageClarisaEndpointService],
})
export class HomepageClarisaEndpointModule {}
