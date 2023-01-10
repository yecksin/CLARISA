import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQaTokenDto } from './dto/create-qa-token.dto';
import { UpdateQaTokenDto } from './dto/update-qa-token.dto';
import { QaToken } from './entities/qa-token.entity';
import { QaService } from '../../shared/integration/qa/qa.service';
import { TokenQaDto } from 'src/shared/integration/qa/dto/token-qa.dto';




@Injectable()
export class QaTokenService {
  constructor(
    @InjectRepository(QaToken)
    private qaTokenRepository: Repository<QaToken>,
    private QaService: QaService
  ) {}

  async create(createQaTokenDto: CreateQaTokenDto): Promise<QaToken> {
    let returnToken: QaToken;
    let qaTokenId: number;
    
    qaTokenId = await this.qaTokenRepository.query(
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

    returnToken = await this.qaTokenRepository.findOne({
      where: { id: qaTokenId },
    });

    let bodyRequestQa: TokenQaDto = {
      token: returnToken.token,
    expiration_date: returnToken.expiration_date.toString(),
    crp_id: returnToken.official_code,
    username: returnToken.username,
    email: returnToken.email,
    name: returnToken.name,
    app_user: returnToken.app_user,
    };

    
    await this.QaService.postQaToken(bodyRequestQa).subscribe((resp) => {
      resp.data;
    });
    
    return returnToken;
  }
}
