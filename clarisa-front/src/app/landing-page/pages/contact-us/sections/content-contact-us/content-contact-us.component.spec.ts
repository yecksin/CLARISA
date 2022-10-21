import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentContactUsComponent } from './content-contact-us.component';

describe('ContentContactUsComponent', () => {
  let component: ContentContactUsComponent;
  let fixture: ComponentFixture<ContentContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentContactUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
