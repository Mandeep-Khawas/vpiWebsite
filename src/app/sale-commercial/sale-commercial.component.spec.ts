import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleCommercialComponent } from './sale-commercial.component';

describe('SaleCommercialComponent', () => {
  let component: SaleCommercialComponent;
  let fixture: ComponentFixture<SaleCommercialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleCommercialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleCommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
