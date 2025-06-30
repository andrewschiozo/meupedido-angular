import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCliente } from './page-cliente';

describe('PageCliente', () => {
  let component: PageCliente;
  let fixture: ComponentFixture<PageCliente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCliente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCliente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
