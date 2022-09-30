import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegationVerticalComponent } from './navegation-vertical.component';

describe('NavegationVerticalComponent', () => {
  let component: NavegationVerticalComponent;
  let fixture: ComponentFixture<NavegationVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavegationVerticalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavegationVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
