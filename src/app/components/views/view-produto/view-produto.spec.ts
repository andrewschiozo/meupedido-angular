import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProduto } from './view-produto';

describe('ViewProduto', () => {
  let component: ViewProduto;
  let fixture: ComponentFixture<ViewProduto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewProduto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProduto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
