import { Module } from '@nestjs/common';
import { InnovationCharacteristicService } from './innovation-characteristic.service';
import { InnovationCharacteristicController } from './innovation-characteristic.controller';
import { InnovationCharacteristicRepository } from './repositories/innovation-characteristic.repository';

@Module({
  controllers: [InnovationCharacteristicController],
  providers: [
    InnovationCharacteristicService,
    InnovationCharacteristicRepository,
  ],
})
export class InnovationCharacteristicModule {}
