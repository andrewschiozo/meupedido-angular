import { TestBed } from '@angular/core/testing';

import { StoreCategoria } from './store-categoria';

describe('StoreCategoria', () => {
  let service: StoreCategoria;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreCategoria);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
