import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

export abstract class BaseApi {
  protected _externalAppEndpoint: string;
  protected _httpService: HttpService;
  protected _user: string;
  protected _pass: string;

  protected getRequest<T = any>(
    endpoint: string,
  ): Observable<AxiosResponse<T, any>> {
    return this._httpService.get(`${this._externalAppEndpoint}/${endpoint}`, {
      auth: { username: this._user, password: this._pass },
    });
  }
}
