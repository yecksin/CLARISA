import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { TokenQaDto } from './dto/token-qa.dto';
import { env } from 'process';

@Injectable()
export class QaService {
    private httpUrl = env.QA_URL;
    constructor(protected readonly httpService: HttpService){
    }

    postQaToken(bodyTokenQa: TokenQaDto){
        return this.httpService.post(`${this.httpUrl}/auth/token-embed`, bodyTokenQa)
    }
}
