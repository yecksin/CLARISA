import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManageApiService {
  urlApi = environment.apiUrl
  constructor(private http: HttpClient) { }

  getAllUser(){
    return this.http.get(`${this.urlApi}user`)
  }
}
