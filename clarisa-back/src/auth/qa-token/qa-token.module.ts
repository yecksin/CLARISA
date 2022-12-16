import { Module } from '@nestjs/common';
import { QaTokenService } from './qa-token.service';
import { QaTokenController } from './qa-token.controller';
import { QaToken } from './entities/qa-token.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([QaToken])],
  controllers: [QaTokenController],
  providers: [QaTokenService],
})
export class QaTokenModule {}
