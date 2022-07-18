import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClarisaPanelComponent } from './clarisa-panel.component';

describe('ClarisaPanelComponent', () => {
  let component: ClarisaPanelComponent;
  let fixture: ComponentFixture<ClarisaPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClarisaPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClarisaPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
