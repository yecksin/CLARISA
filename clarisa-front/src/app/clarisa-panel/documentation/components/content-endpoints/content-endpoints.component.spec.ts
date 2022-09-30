import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentEndpointsComponent } from './content-endpoints.component';

describe('ContentEndpointsComponent', () => {
  let component: ContentEndpointsComponent;
  let fixture: ComponentFixture<ContentEndpointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentEndpointsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentEndpointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
