import { Component, OnInit } from '@angular/core';
import { EndpointsInformationService } from '../../../../../../../documentation/services/endpoints-information.service';

@Component({
  selector: 'app-list-institution',
  templateUrl: './list-institution.component.html',
  styleUrls: ['./list-institution.component.scss'],
})
export class ListInstitutionComponent implements OnInit {
  columns: any = [
    ['Code', 'code', 'field'],
    ['Acronym', 'acronym', 'field'],
    ['Name', 'name', 'field'],
    ['Insitution Type', 'institutionType', 'object', [[null, 'name', 'field']]],
    [
      'Office Location',
      'countryOfficeDTO',
      'list',
      [[null, 'isoAlpha2', 'field']],
    ],
    ['Website', 'websiteLink', 'field'],
  ];
  findColumns: string[] = [
    'code',
    'acronym',
    'name',
    'institutionType',
    'countryOfficeDTO',
    'websiteLink',
  ];
  loading: boolean = true;
  informationEndpoint: any;

  constructor(private _manageApiService: EndpointsInformationService) {}

  ngOnInit(): void {
    this._manageApiService
      .getAnyEndpoint('api/institutions')
      .subscribe((resp) => {
        this.informationEndpoint = resp;
        this.loading = false;
      });
  }
}
