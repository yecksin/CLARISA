import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserData } from '../interfaces/user-data';

export const GetUserData = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user as UserData;
  },
);
