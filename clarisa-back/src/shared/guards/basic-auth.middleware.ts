import {
  Injectable,
  CanActivate,
  ExecutionContext,
  NestMiddleware,
  Next,
  Req,
  Res,
} from '@nestjs/common';
import { ModuleRef, Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { User } from 'src/api/user/entities/user.entity';
import { IS_CLARISA_PAGE } from '../decorators/clarisa-page.decorator';
import Base64 from 'crypto-js/enc-base64';
import CryptoJS from 'crypto-js/core';
import { AuthService } from 'src/auth/auth.service';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class BasicAuthMiddleware implements NestMiddleware {
  constructor(private moduleRef: ModuleRef, private authService: AuthService) {}

  async use(
    @Req() request: Request,
    @Res() response: Response,
    @Next() next: NextFunction,
  ): Promise<void> {
    const authHeader: string = request.headers?.authorization ?? '';
    const basic: boolean = authHeader?.toLocaleLowerCase().includes('basic');

    if (basic) {
      const token: string = authHeader?.replace('Basic ', '');
      const auth: string = Buffer.from(token, 'base64').toString();
      const credentials: string[] = auth.split(':');

      await this.authService
        .validateUser(credentials[0], credentials[1])
        .then((u) => {
          if (u) {
            return this.authService.login(u).then((l) => {
              request.headers.authorization = (`Bearer ${l.access_token}`);
              return true;
            });
          }
          return false;
        })
        .catch((e) => false);
    }
    next();
  }
}
