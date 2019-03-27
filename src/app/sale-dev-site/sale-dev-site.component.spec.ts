import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleDevSiteComponent } from './sale-dev-site.component';

describe('SaleDevSiteComponent', () => {
  let component: SaleDevSiteComponent;
  let fixture: ComponentFixture<SaleDevSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleDevSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleDevSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
