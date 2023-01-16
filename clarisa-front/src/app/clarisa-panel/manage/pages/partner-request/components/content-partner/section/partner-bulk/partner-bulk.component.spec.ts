import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerBulkComponent } from './partner-bulk.component';

describe('PartnerBulkComponent', () => {
  let component: PartnerBulkComponent;
  let fixture: ComponentFixture<PartnerBulkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerBulkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnerBulkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
