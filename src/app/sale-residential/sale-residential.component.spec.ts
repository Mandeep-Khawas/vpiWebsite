import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleResidentialComponent } from './sale-residential.component';

describe('SaleResidentialComponent', () => {
  let component: SaleResidentialComponent;
  let fixture: ComponentFixture<SaleResidentialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleResidentialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleResidentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
