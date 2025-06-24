import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProdutoForm } from './page-produto-form';

describe('PageProdutoForm', () => {
  let component: PageProdutoForm;
  let fixture: ComponentFixture<PageProdutoForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageProdutoForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageProdutoForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
