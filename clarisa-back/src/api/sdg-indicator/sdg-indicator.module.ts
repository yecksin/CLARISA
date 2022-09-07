import { Module } from '@nestjs/common';
import { SdgIndicatorService } from './sdg-indicator.service';
import { SdgIndicatorController } from './sdg-indicator.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SdgIndicator } from './entities/sdg-indicator.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SdgIndicator])],
  controllers: [SdgIndicatorController],
  providers: [SdgIndicatorService],
})
export class SdgIndicatorModule {}
