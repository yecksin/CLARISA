import { Injectable } from '@nestjs/common';
import { CreateQaTokenAuthDto } from './dto/create-qa-token-auth.dto';
import { UpdateQaTokenAuthDto } from './dto/update-qa-token-auth.dto';
import { QaTokenAuthRepository } from './repositories/qa-token-auth.repository';

@Injectable()
export class QaTokenAuthService {
  constructor(private qaTokenAuthRepository: QaTokenAuthRepository) {}

  async findAll() {
    return this.qaTokenAuthRepository.find();
  }

  async findOne(id: number) {
    return this.qaTokenAuthRepository.findOneBy({
      id,
    });
  }
}
