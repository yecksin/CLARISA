import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/api/user/user.module';
import { jwtConstants } from './auth.constants';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
import { BCryptPasswordEncoder } from './utils/BCryptPasswordEncoder';
import { DBAuth } from './utils/DBAuth';
import { LDAPAuth } from './utils/LDAPAuth';
import { LegacyPasswordEncoder } from './utils/LegacyPasswordEncoder';

@Module({
  controllers: [AuthController],
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: jwtConstants.jwtTime },
    }),
  ],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
    LegacyPasswordEncoder,
    BCryptPasswordEncoder,
    LDAPAuth,
    DBAuth,
  ],
  exports: [AuthService],
})
export class AuthModule {}
