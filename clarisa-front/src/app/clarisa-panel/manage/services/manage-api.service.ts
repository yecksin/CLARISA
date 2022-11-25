import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ManageApiService {
  urlApi = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getAllUser() {
    return this.http.get(`${this.urlApi}users`);
  }

  getAllPartnerRequest() {
    return this.http.get(`${this.urlApi}api/partner-requests`);
  }

  getAllTypeInstitutions() {
    return this.http.get(`${this.urlApi}api/institution-types/from-parent`);
  }

  getAllCountries() {
    return this.http.get(`${this.urlApi}api/countries`);
  }

  postNewRequestIntitution(bodyRequest): Observable<any> {
    return this.http.post(
      `${this.urlApi}api/partner-requests/create`,
      bodyRequest
    );
  }

  postAceptedOrRejectRequest(bodyRequest): Observable<any> {
    return this.http.post(
      `${this.urlApi}api/partner-requests/respond`,
      bodyRequest
    );
  }
}
