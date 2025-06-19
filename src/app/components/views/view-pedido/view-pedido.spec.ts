import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPedido } from './view-pedido';

describe('ViewPedido', () => {
  let component: ViewPedido;
  let fixture: ComponentFixture<ViewPedido>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewPedido]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPedido);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
