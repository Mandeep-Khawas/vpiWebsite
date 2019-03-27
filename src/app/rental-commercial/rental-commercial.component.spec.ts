import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalCommercialComponent } from './rental-commercial.component';

describe('RentalCommercialComponent', () => {
  let component: RentalCommercialComponent;
  let fixture: ComponentFixture<RentalCommercialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalCommercialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalCommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
