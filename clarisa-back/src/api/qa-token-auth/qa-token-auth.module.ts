import { Module } from '@nestjs/common';
import { QaTokenAuthService } from './qa-token-auth.service';
import { QaTokenAuthController } from './qa-token-auth.controller';
import { QaTokenAuthRepository } from './repositories/qa-token-auth.repository';

@Module({
  controllers: [QaTokenAuthController],
  providers: [QaTokenAuthService, QaTokenAuthRepository],
})
export class QaTokenAuthModule {}
