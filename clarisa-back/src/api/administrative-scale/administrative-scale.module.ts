import { Module } from '@nestjs/common';
import { AdministrativeScaleController } from './administrative-scale.controller';

@Module({
  controllers: [AdministrativeScaleController],
  providers: [],
})
export class AdministrativeScaleModule {}
