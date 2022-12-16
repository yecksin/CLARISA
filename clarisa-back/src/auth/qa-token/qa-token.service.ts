import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQaTokenDto } from './dto/create-qa-token.dto';
import { UpdateQaTokenDto } from './dto/update-qa-token.dto';
import { QaToken } from './entities/qa-token.entity';

@Injectable()
export class QaTokenService {
  constructor(
    @InjectRepository(QaToken)
    private qaTokenRepository: Repository<QaToken>,
  ) {}

  async create(createQaTokenDto: CreateQaTokenDto): Promise<QaToken> {
    let returnToken: QaToken;
    let qaTokenId: number;
    qaTokenId = await this.qaTokenRepository.query(
      `SELECT getQAToken(?,?,?,?,?)`,
      [
        createQaTokenDto.name,
        createQaTokenDto.username,
        createQaTokenDto.email,
        createQaTokenDto.misAcronym,
        createQaTokenDto.appUser,
      ],
    );
    qaTokenId = qaTokenId[0][Object.keys(qaTokenId[0])[0]];

    returnToken = await this.qaTokenRepository.findOne({
      where: { id: qaTokenId },
    });
    return returnToken;
  }
}
