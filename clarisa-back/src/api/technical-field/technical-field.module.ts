import { Module } from '@nestjs/common';
import { TechnicalFieldService } from './technical-field.service';
import { TechnicalFieldController } from './technical-field.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TechnicalField } from './entities/technical-field.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TechnicalField])],
  controllers: [TechnicalFieldController],
  providers: [TechnicalFieldService],
})
export class TechnicalFieldModule {}
