import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceClarisaComponent } from './service-clarisa.component';

describe('ServiceClarisaComponent', () => {
  let component: ServiceClarisaComponent;
  let fixture: ComponentFixture<ServiceClarisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceClarisaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceClarisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
