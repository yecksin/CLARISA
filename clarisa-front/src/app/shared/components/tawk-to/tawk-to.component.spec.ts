import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TawkToComponent } from './tawk-to.component';

describe('TawkToComponent', () => {
  let component: TawkToComponent;
  let fixture: ComponentFixture<TawkToComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TawkToComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TawkToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
