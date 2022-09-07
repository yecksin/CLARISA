import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardClarisaComponent } from './dashboard-clarisa.component';

describe('DashboardClarisaComponent', () => {
  let component: DashboardClarisaComponent;
  let fixture: ComponentFixture<DashboardClarisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardClarisaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardClarisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
