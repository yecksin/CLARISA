import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/envitonments';

@Injectable({
  providedIn: 'root',
})
export class EndpointsInformationService {
  urlApi = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getAllEndpoints() {
    return this.http.get(`${this.urlApi}hp-clarisa-category-endpoints`);
  }
}