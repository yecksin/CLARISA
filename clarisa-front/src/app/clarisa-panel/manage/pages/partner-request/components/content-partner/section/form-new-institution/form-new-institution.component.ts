import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-new-institution',
  templateUrl: './form-new-institution.component.html',
  styleUrls: ['./form-new-institution.component.scss'],
})
export class FormNewInstitutionComponent implements OnInit {
  cities: any[];
  selectedCity: any;
  type: any[];
  selectedType: any;
  constructor() {}

  ngOnInit(): void {
    this.cities = [
      { name: '', code: '' },
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
    this.type = [
      { name: '', code: '' },
      { name: 'CGIAR Center', code: '' },
      { name: 'Regional Organization', code: '' },
      { name: 'Other', code: '' },
      { name: 'Agricultural advisory and/or extension services', code: '' },
      {
        name: 'Associations (other than regional organizations, extension, and farmer/community level)',
        code: '',
      },
    ];
  }
}
