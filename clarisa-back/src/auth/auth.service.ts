import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/api/user/entities/user.entity';
import { UserService } from 'src/api/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService
  ) { }

  async validateUser(email: string, password: string) {
    email = email.trim().toLowerCase();
    const user:any = await this.usersService.findOneByEmail(email);
    console.log({ user });

    // const user_Info = await user.userInfo;

    // console.log({user_Info});
    
    if (user && user.checkIfUnencryptedPasswordIsValid(password)) {
      //await  this.usersService.updateLastLogin(user);
      const { password, is_active, ...result } = user;
      console.log('credentials ok');
      return result;
    } else {
      throw new HttpException('Credenciales inválidas. Por favor revisa e inténtalo de nuevo.', HttpStatus.UNAUTHORIZED);
    }
  }

  async login(user: User) {
    // Add payload
    console.log({user});
    
    const payload = { email: user.email, sub: user.id };
    return {access_token: this.jwtService.sign(payload)};
  }
}
