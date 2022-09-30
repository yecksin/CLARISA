import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { Logger } from '@nestjs/common';
import axios from 'axios';

export abstract class BaseApi {
  protected externalAppEndpoint: string;
  protected httpService: HttpService;
  protected user: string;
  protected pass: string;
  protected logger: Logger;

  protected getRequest<T = any>(
    endpoint: string,
  ): Observable<AxiosResponse<T, any>> {
    try {
      return this.httpService.get(`${this.externalAppEndpoint}/${endpoint}`, {
        auth: { username: this.user, password: this.pass },
      });
    } catch (e) {
      if (axios.isAxiosError(e)) {
        this.logger.error(`axios error: ${e.message}`);
      } else {
        this.logger.error(`unexpected error: ${e.message}`);
      }
    }
  }
}
