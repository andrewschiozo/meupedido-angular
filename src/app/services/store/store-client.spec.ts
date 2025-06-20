import { TestBed } from '@angular/core/testing';

import { StoreClient } from './store-client';

describe('StoreClient', () => {
  let service: StoreClient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
