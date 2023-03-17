import { Injectable } from '@nestjs/common';
import { TokenQaDto } from '../../shared/integration/qa/dto/token-qa.dto';
import { QaService } from '../../shared/integration/qa/qa.service';
import { CreateQaTokenAuthDto } from './dto/create-qa-token-auth.dto';
import { QaTokenAuth } from './entities/qa-token-auth.entity';
import { QaTokenAuthRepository } from './repositories/qa-token-auth.repository';

@Injectable()
export class QaTokenAuthService {
  constructor(
    private qaService: QaService,
    private qaTokenAuthRepository: QaTokenAuthRepository,
  ) {}

  async findAll() {
    return this.qaTokenAuthRepository.find();
  }

  async findOne(id: number) {
    return this.qaTokenAuthRepository.findOneBy({
      id,
    });
  }

  async create(createQaTokenDto: CreateQaTokenAuthDto): Promise<QaTokenAuth> {
    let qaTokenId: number = await this.qaTokenAuthRepository.query(
      `SELECT getQAToken(?,?,?,?,?,?)`,
      [
        createQaTokenDto.name,
        createQaTokenDto.username,
        createQaTokenDto.email,
        createQaTokenDto.misAcronym,
        createQaTokenDto.appUser,
        createQaTokenDto.official_code,
      ],
    );
    qaTokenId = qaTokenId[0][Object.keys(qaTokenId[0])[0]];

    const returnToken = await this.qaTokenAuthRepository.findOne({
      where: { id: qaTokenId },
    });

    const bodyRequestQa: TokenQaDto = {
      token: returnToken.token,
      expiration_date: returnToken.expiration_date.toString(),
      crp_id: returnToken.official_code,
      username: returnToken.username,
      email: returnToken.email,
      name: returnToken.name,
      app_user: `${returnToken.app_user}`,
    };

    await this.qaService.postQaToken(bodyRequestQa).subscribe((resp) => {
      resp.data;
    });

    return returnToken;
  }
}
