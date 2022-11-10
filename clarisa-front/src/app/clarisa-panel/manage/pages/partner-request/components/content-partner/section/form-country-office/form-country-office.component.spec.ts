import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCountryOfficeComponent } from './form-country-office.component';

describe('FormCountryOfficeComponent', () => {
  let component: FormCountryOfficeComponent;
  let fixture: ComponentFixture<FormCountryOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCountryOfficeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCountryOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
