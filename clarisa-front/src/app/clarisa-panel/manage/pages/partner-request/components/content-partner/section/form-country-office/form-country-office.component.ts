import { Component, OnInit } from '@angular/core';
import { EndpointsInformationService } from '../../../../../../../documentation/services/endpoints-information.service';

@Component({
  selector: 'app-form-country-office',
  templateUrl: './form-country-office.component.html',
  styleUrls: ['./form-country-office.component.scss'],
})
export class FormCountryOfficeComponent implements OnInit {
  informationEndpoint: any[];
  institution: any;
  selectedCountries1: any[];
  countries: any;
  constructor(private _manageApiService: EndpointsInformationService) {}

  ngOnInit(): void {
    this.informationEndpoint = [];
    this._manageApiService
      .getAnyEndpoint('/api/institutions')
      .subscribe((resp) => {
        this.informationEndpoint.push(resp);
      });

    this._manageApiService
      .getAnyEndpoint('/api/countries')
      .subscribe((resp) => {
        this.countries = resp;
      });
  }
}
