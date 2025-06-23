import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewClienteForm } from './view-cliente-form';

describe('ViewClienteForm', () => {
  let component: ViewClienteForm;
  let fixture: ComponentFixture<ViewClienteForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewClienteForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewClienteForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
