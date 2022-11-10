import { Component, OnInit } from '@angular/core';
import { EndpointsInformationService } from '../../../../../../../documentation/services/endpoints-information.service';

@Component({
  selector: 'app-form-country-office',
  templateUrl: './form-country-office.component.html',
  styleUrls: ['./form-country-office.component.scss'],
})
export class FormCountryOfficeComponent implements OnInit {
  informationEndpoint: any;
  institution: any;
  selectedCountries1: any[];
  countries: any[];
  constructor(private _manageApiService: EndpointsInformationService) {}

  ngOnInit(): void {
    this._manageApiService
      .getAnyEndpoint('/api/institutions')
      .subscribe((resp) => {
        resp;
      });
    this.countries = [
      { name: 'Australia', code: 'AU' },
      { name: 'Brazil', code: 'BR' },
      { name: 'China', code: 'CN' },
      { name: 'Egypt', code: 'EG' },
      { name: 'France', code: 'FR' },
      { name: 'Germany', code: 'DE' },
      { name: 'India', code: 'IN' },
      { name: 'Japan', code: 'JP' },
      { name: 'Spain', code: 'ES' },
      { name: 'United States', code: 'US' },
    ];
  }
}
