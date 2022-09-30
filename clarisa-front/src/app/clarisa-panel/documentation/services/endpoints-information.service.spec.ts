import { TestBed } from '@angular/core/testing';

import { EndpointsInformationService } from './endpoints-information.service';

describe('EndpointsInformationService', () => {
  let service: EndpointsInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EndpointsInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
