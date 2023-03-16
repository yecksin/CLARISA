import { Module } from '@nestjs/common';
import { TechnicalFieldService } from './technical-field.service';
import { TechnicalFieldController } from './technical-field.controller';
import { TechnicalFieldRepository } from './repositories/technical-field.repository';

@Module({
  controllers: [TechnicalFieldController],
  providers: [TechnicalFieldService, TechnicalFieldRepository],
})
export class TechnicalFieldModule {}
