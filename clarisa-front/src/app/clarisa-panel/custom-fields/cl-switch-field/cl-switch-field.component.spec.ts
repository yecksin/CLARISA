import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClSwitchFieldComponent } from './cl-switch-field.component';

describe('ClSwitchFieldComponent', () => {
  let component: ClSwitchFieldComponent;
  let fixture: ComponentFixture<ClSwitchFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClSwitchFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClSwitchFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
