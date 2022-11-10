import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPartnerComponent } from './content-partner.component';

describe('ContentPartnerComponent', () => {
  let component: ContentPartnerComponent;
  let fixture: ComponentFixture<ContentPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentPartnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
