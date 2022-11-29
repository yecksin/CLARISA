import { AnimateTimings } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectItemGroup } from 'primeng/api';
import { ManageApiService } from '../../../../../../../../services/manage-api.service';

@Component({
  selector: 'app-edit-request',
  templateUrl: './edit-request.component.html',
  styleUrls: ['./edit-request.component.scss'],
})
export class EditRequestComponent implements OnInit {
  @Input() informationContent: any;
  cities: any;
  selectedCity: any;
  type: any[];
  selectedType: any;
  group: FormGroup;
  groupedCities: any;
  selectedCity3: SelectItemGroup[];
  parentInstitution: any;
  loading: boolean = true;
  subTypeOne: any;
  selectSubtypeOne: any;
  subTypeTwo: any;
  selectSubTypeTwo: any;
  constructor(
    private formBuilder: FormBuilder,
    private _manageApiService: ManageApiService
  ) {}

  ngOnInit(): void {
    console.log(this.informationContent);

    this.cities = [];
    this.type = [];
    this.subTypeOne = [];
    this.subTypeTwo = [];
    this.cities.push(this.informationContent.countryDTO);
    this._manageApiService.getAllCountries().subscribe((r) => {
      for (let i in r) {
        if (r[i].name !== this.informationContent.countryDTO.name) {
          this.cities.push(r[i]);
        }
      }
    });
    if (this.informationContent.institutionTypeDTO.id_parent != null) {
      this._manageApiService
        .getByIdTypeInstitution(
          this.informationContent.institutionTypeDTO.id_parent
        )
        .subscribe((res) => {
          this.parentInstitution = res;
          if (this.parentInstitution.parent_id != null) {
            this.subTypeOne.push({});
            this.subTypeTwo.push(this.informationContent.institutionTypeDTO);
            this.type.push({});
            this._manageApiService.getAllTypeInstitutions().subscribe((re) => {
              for (let i in re) {
                if (re[i].code == this.parentInstitution.parent_id) {
                  this.type[0] = re[i];
                  for (let f in re[i].children) {
                    if (re[i].children[f].code == this.parentInstitution.code) {
                      this.subTypeOne[0] = re[i].children[f];
                      for (let h in re[i].children[f].children) {
                        if (
                          re[i].children[f].children[h].code ==
                          this.informationContent.institutionTypeDTO.code
                        ) {
                          this.subTypeTwo[0] = re[i].children[f].children[h];
                        } else {
                          this.subTypeTwo.push(re[i].children[f].children[h]);
                        }
                      }
                    } else {
                      this.subTypeOne.push(re[i].children[f]);
                    }
                  }
                } else {
                  this.type.push(re[i]);
                }
              }
              this.loading = false;
            });
          } else {
            this.subTypeOne.push({});
            this.type.push({});
            this._manageApiService.getAllTypeInstitutions().subscribe((re) => {
              for (let i in re) {
                if (re[i].code == this.parentInstitution.code) {
                  this.type[0] = re[i];
                  for (let f in re[i].children) {
                    if (
                      re[i].children[f].code ==
                      this.informationContent.institutionTypeDTO.code
                    ) {
                      this.subTypeOne[0] = re[i].children[f];
                    } else {
                      this.subTypeOne.push(re[i].children[f]);
                    }
                  }
                } else {
                  this.type.push(re[i]);
                }
              }
              this.loading = false;
            });
          }
          console.log(this.parentInstitution);
        });
    } else {
      this.type.push({});
      this._manageApiService.getAllTypeInstitutions().subscribe((re) => {
        for (let i in re) {
          if (
            re[i].code ==
            Number(this.informationContent.institutionTypeDTO.code)
          ) {
            this.type[0] = this.informationContent.institutionTypeDTO;
            console.log('entre');
          } else {
            this.type.push(re[i]);
          }
        }
        this.type[0] = this.informationContent.institutionTypeDTO;
        this.loading = false;
      });
    }

    this.group = this.formBuilder.group({
      id: this.informationContent.id,
      acronym: this.informationContent.acronym,
      category_1: this.informationContent.category_1,
      category_2: this.informationContent.category_2,
      externalUserComments: this.informationContent.externalUserComments,
      externalUserMail: this.informationContent.externalUserMail,
      externalUserName: this.informationContent.externalUserName,
      hqCountryIso: this.informationContent.countryDTO.isoAlpha2,
      institutionTypeCode: this.informationContent.institutionTypeDTO.code,
      misAcronym: this.informationContent.mis,
      name: this.informationContent.partnerName,
      websiteLink: this.informationContent.webPage,
      modification_justification: ['', Validators.required],
      institutionHelpOne: '',
      institutionHelpTwo: '',
    });

    setTimeout(() => {
      console.log(this.parentInstitution);
    }, 1000);
  }

  selectType(types: any) {
    if (types != null) {
      this.subTypeTwo = [];
      this.subTypeOne = [];
      this.subTypeOne = types.children;
    } else {
      this.subTypeTwo = [];
      this.subTypeOne = [];
    }
    let numberInst: number = parseInt(types.code);
    this.group.controls['institutionTypeCode'].setValue(numberInst);
  }

  selectSubType(types: any) {
    if (types != null) {
      this.subTypeTwo = [];
      this.subTypeTwo = types.children;
    } else {
      this.subTypeTwo = [];
    }
    let numberInst: number = parseInt(types.code);
    this.group.controls['institutionTypeCode'].setValue(numberInst);
  }

  isArray(list) {
    return Array.isArray(list);
  }

  edit(value) {
    console.log(value);
    if (this.group.valid) {
      if (
        this.isArray(value.institutionHelpOne.children) &&
        value.institutionHelpOne.children.length != 0
      ) {
        if (
          this.isArray(value.institutionHelpTwo.children) &&
          value.institutionHelpTwo.children.length != 0
        ) {
          let numberInst: number = parseInt(value.institutionTypeCode.code);
          value.institutionTypeCode = numberInst;
        } else {
          let numberInst: number = parseInt(
            this.informationContent.institutionTypeDTO.code
          );
          value.institutionTypeCode = numberInst;
        }
      } else {
        let numberInst: number = parseInt(
          this.informationContent.institutionTypeDTO.code
        );
        value.institutionTypeCode = numberInst;
      }

      console.log(value.hqCountryIso.isoAlpha2);
      value.hqCountryIso = value.hqCountryIso.isoAlpha2;

      this.group.removeControl('institutionHelpOne');
      this.group.removeControl('institutionHelpTwo');
      delete value.institutionHelpOne;
      delete value.institutionHelpTwo;
      console.log(this.group.value);
      console.log(value);
      this.group = this.formBuilder.group({
        id: this.informationContent.id,
        acronym: this.informationContent.acronym,
        category_1: this.informationContent.category_1,
        category_2: this.informationContent.category_2,
        externalUserComments: this.informationContent.externalUserComments,
        externalUserMail: this.informationContent.externalUserMail,
        externalUserName: this.informationContent.externalUserName,
        hqCountryIso: this.informationContent.countryDTO.isoAlpha2,
        institutionTypeCode: this.informationContent.institutionTypeDTO.code,
        misAcronym: this.informationContent.mis,
        name: this.informationContent.partnerName,
        websiteLink: this.informationContent.webPage,
        modification_justification: ['', Validators.required],
        institutionHelpOne: '',
        institutionHelpTwo: '',
      });
    } else {
      setTimeout(() => {
        alert('Error validator');
        //change this route when the new component is ready
      }, 100);
    }
  }
}
