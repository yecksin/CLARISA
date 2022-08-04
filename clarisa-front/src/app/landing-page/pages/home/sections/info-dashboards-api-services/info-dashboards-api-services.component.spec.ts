import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDashboardsApiServicesComponent } from './info-dashboards-api-services.component';

describe('InfoDashboardsApiServicesComponent', () => {
  let component: InfoDashboardsApiServicesComponent;
  let fixture: ComponentFixture<InfoDashboardsApiServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoDashboardsApiServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoDashboardsApiServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
