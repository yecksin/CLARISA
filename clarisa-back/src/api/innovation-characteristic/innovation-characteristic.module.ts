import { Module } from '@nestjs/common';
import { InnovationCharacteristicService } from './innovation-characteristic.service';
import { InnovationCharacteristicController } from './innovation-characteristic.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InnovationCharacteristic } from './entities/innovation-characteristic.entity';
import { InnovationCharacteristicRepository } from './repositories/innovation-characteristic.repository';

@Module({
  controllers: [InnovationCharacteristicController],
  providers: [
    InnovationCharacteristicService,
    InnovationCharacteristicRepository,
  ],
})
export class InnovationCharacteristicModule {}
