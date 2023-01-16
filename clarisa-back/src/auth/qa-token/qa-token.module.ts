import { Module } from '@nestjs/common';
import { QaTokenService } from './qa-token.service';
import { QaTokenController } from './qa-token.controller';
import { QaToken } from './entities/qa-token.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

import { HttpModule } from '@nestjs/axios';
import { QaService } from 'src/shared/integration/qa/qa.service';
import { TokenQaDto } from 'src/shared/integration/qa/dto/token-qa.dto';

@Module({
  imports: [HttpModule,
    TypeOrmModule.forFeature([QaToken]),
    TokenQaDto
    ],
  controllers: [QaTokenController],
  providers: [QaTokenService,QaService],
})
export class QaTokenModule {}
