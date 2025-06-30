import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageClienteForm } from './page-cliente-form';

describe('PageClienteForm', () => {
  let component: PageClienteForm;
  let fixture: ComponentFixture<PageClienteForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageClienteForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageClienteForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
