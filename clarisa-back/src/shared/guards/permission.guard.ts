import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { ModuleRef, Reflector } from '@nestjs/core';
import { InjectRepository } from '@nestjs/typeorm';
import { urlencoded } from 'express';
import { map, Observable } from 'rxjs';
import { User } from 'src/api/user/entities/user.entity';
import { UserService } from 'src/api/user/user.service';
import { Repository } from 'typeorm';
import { IS_CLARISA_PAGE } from '../decorators/clarisa-page.decorator';

@Injectable()
export class PermissionGuard implements CanActivate {
  private userService: UserService;
  constructor(private reflector: Reflector, private moduleRef: ModuleRef) {
    this.userService = this.moduleRef.get(UserService, { strict: false });
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const isClarisaPage: boolean | undefined = this.reflector.get<boolean>(
      IS_CLARISA_PAGE,
      context.getClass(),
    );
    const request = context.switchToHttp().getRequest();
    const userPayload = request.user;
    const route = request.route;

    return this.userService
      .findOneByEmail(userPayload.email)
      .then((userDb: User) => {
        if (isClarisaPage) {
          //TODO extract this magic constant
          return userDb.id === 3043;
        }

        return (userDb.permissions ?? []).includes(route.path);
      });
  }

  private matchRoles(
    routeRequirements: string[],
    userRoles: string[],
  ): boolean {
    return true;
  }
}
