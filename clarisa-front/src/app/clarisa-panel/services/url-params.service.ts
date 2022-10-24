import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UrlParamsService {
  paramsUrl: any;
  constructor() {}

  updateParams(paramsUrl: any) {
    this.paramsUrl = paramsUrl;
  }

  getParams() {
    return this.paramsUrl;
  }
}
