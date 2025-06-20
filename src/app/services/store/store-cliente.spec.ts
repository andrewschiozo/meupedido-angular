import { TestBed } from '@angular/core/testing';

import { StoreCliente } from './store-cliente';

describe('StoreCliente', () => {
  let service: StoreCliente;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreCliente);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
