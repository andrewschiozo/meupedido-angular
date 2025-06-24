import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProduto } from './page-produto';

describe('PageProduto', () => {
  let component: PageProduto;
  let fixture: ComponentFixture<PageProduto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageProduto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageProduto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
