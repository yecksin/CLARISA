import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/api/user/entities/user.entity';
import { UserService } from 'src/api/user/user.service';
import { ModuleRef } from '@nestjs/core';
import { BaseAuthenticator } from './utils/interface/BaseAuthenticator';
import { LDAPAuth } from './utils/LDAPAuth';
import { DBAuth } from './utils/DBAuth';
import { BaseMessageDTO } from './utils/BaseMessageDTO';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
    private moduleRef: ModuleRef,
  ) {}

  async validateUser(email: string, pass: string) {
    email = email.trim().toLowerCase();
    const user: User =
      (await this.usersService.findOneByEmail(email, false)) ??
      (await this.usersService.findOneByUsername(email, false));
    let authenticator: BaseAuthenticator;

    // const user_Info = await user.userInfo;

    // console.log({user_Info});

    if (user) {
      authenticator = this.moduleRef.get(
        user.is_cgiar_user ? LDAPAuth : DBAuth,
      );
      let authResult: boolean | BaseMessageDTO =
        await authenticator.authenticate(user.email, pass);
      if (authResult.constructor.name === Boolean.name) {
        return true;
      }
    } else {
      throw new HttpException(
        'Credenciales inválidas. Por favor revisa e inténtalo de nuevo.',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }

  async login(user: User) {
    // Add payload
    //console.log({user});

    const payload = { email: user.email, sub: user.id };
    return { access_token: this.jwtService.sign(payload) };
  }
}
