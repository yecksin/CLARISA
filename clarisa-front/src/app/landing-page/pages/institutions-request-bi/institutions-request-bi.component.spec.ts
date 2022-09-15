import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionsRequestBiComponent } from './institutions-request-bi.component';

describe('InstitutionsRequestBiComponent', () => {
  let component: InstitutionsRequestBiComponent;
  let fixture: ComponentFixture<InstitutionsRequestBiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionsRequestBiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitutionsRequestBiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
