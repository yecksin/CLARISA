import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestInstitutionsFormComponent } from './request-institutions-form.component';

describe('RequestInstitutionsFormComponent', () => {
  let component: RequestInstitutionsFormComponent;
  let fixture: ComponentFixture<RequestInstitutionsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestInstitutionsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestInstitutionsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
