import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../../api/user/user.module';
import { AuthModule } from '../../auth/auth.module';
import { AuthService } from '../../auth/auth.service';
@Module({
  imports: [UserModule, AuthModule, JwtModule],
  providers: [AuthService],
})
export class GuardsModule {}
