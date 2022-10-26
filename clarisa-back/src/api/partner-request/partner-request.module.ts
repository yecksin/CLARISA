import { Module } from '@nestjs/common';
import { PartnerRequestService } from './partner-request.service';
import { PartnerRequestController } from './partner-request.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartnerRequest } from './entities/partner-request.entity';
import { PartnerRequestRepository } from './repositories/partner-request.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PartnerRequest])],
  controllers: [PartnerRequestController],
  providers: [PartnerRequestService, PartnerRequestRepository],
})
export class PartnerRequestModule {}
