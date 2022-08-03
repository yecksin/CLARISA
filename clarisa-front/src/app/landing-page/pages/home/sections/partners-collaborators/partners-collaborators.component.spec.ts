import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersCollaboratorsComponent } from './partners-collaborators.component';

describe('PartnersCollaboratorsComponent', () => {
  let component: PartnersCollaboratorsComponent;
  let fixture: ComponentFixture<PartnersCollaboratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnersCollaboratorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnersCollaboratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
