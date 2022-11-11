import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewInstitutionComponent } from './form-new-institution.component';

describe('FormNewInstitutionComponent', () => {
  let component: FormNewInstitutionComponent;
  let fixture: ComponentFixture<FormNewInstitutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNewInstitutionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormNewInstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
