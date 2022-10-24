import { Module } from '@nestjs/common';
import { InnovationCharacteristicService } from './innovation-characteristic.service';
import { InnovationCharacteristicController } from './innovation-characteristic.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InnovationCharacteristic } from './entities/innovation-characteristic.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InnovationCharacteristic])],
  controllers: [InnovationCharacteristicController],
  providers: [InnovationCharacteristicService],
})
export class InnovationCharacteristicModule {}
