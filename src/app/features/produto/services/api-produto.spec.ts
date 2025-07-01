import { TestBed } from '@angular/core/testing';

import { ApiProduto } from './api-produto';

describe('ApiProduto', () => {
  let service: ApiProduto;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiProduto);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
