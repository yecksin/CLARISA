import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  findUsers() {
    return `Return all users`;
  }

  findUser(id: number) {
    return `user #${id} `;
  }
}
