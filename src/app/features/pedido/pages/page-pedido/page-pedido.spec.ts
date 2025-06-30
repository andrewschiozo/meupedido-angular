import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePedido } from './page-pedido';

describe('PagePedido', () => {
  let component: PagePedido;
  let fixture: ComponentFixture<PagePedido>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagePedido]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagePedido);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
