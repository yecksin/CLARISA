import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentInstiRequestComponent } from './content-insti-request.component';

describe('ContentInstiRequestComponent', () => {
  let component: ContentInstiRequestComponent;
  let fixture: ComponentFixture<ContentInstiRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentInstiRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentInstiRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
