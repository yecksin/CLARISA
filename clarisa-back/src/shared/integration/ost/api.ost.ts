import { HttpService } from '@nestjs/axios';
import { BaseApi } from '../base-api';
import { env } from 'process';
import { WorkpackageOSTDto } from './dto/workpackage.ost.dto';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiOST extends BaseApi {
  constructor(private readonly httpService: HttpService) {
    super();
    this._httpService = httpService;
    this._externalAppEndpoint = env.OST_URL;
    this._user = env.OST_USER;
    this._pass = env.OST_PASS;
  }

  getWorkpackages() {
    return this.getRequest('previews/packages');
  }

  getEndOfIniciative() {
    return this.getRequest('stages-control/proposal/eoi/all/initiatives');
  }
}
