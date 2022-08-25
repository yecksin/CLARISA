import { User } from 'src/api/user/entities/user.entity';
import { BaseMessageDTO } from '../BaseMessageDTO';

export interface BaseAuthenticator {
  authenticate(
    username: string,
    password: string,
  ): Promise<User | BaseMessageDTO>;
}
