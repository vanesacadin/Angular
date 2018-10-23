import { TestBed, inject } from '@angular/core/testing';

import { MockitemsService } from './mockitems.service';

describe('MockitemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockitemsService]
    });
  });

  it('should be created', inject([MockitemsService], (service: MockitemsService) => {
    expect(service).toBeTruthy();
  }));
});
