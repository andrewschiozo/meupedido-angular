import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCliente } from './view-cliente';

describe('ViewCliente', () => {
  let component: ViewCliente;
  let fixture: ComponentFixture<ViewCliente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewCliente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCliente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
