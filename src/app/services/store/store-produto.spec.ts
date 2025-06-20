import { TestBed } from '@angular/core/testing';

import { StoreProduto } from './store-produto';

describe('StoreProduto', () => {
  let service: StoreProduto;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreProduto);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
