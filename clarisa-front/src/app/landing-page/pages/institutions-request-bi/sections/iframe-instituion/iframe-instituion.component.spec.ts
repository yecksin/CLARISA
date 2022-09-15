import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IframeInstituionComponent } from './iframe-instituion.component';

describe('IframeInstituionComponent', () => {
  let component: IframeInstituionComponent;
  let fixture: ComponentFixture<IframeInstituionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IframeInstituionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IframeInstituionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
