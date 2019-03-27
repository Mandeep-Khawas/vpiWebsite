import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalResidentialComponent } from './rental-residential.component';

describe('RentalResidentialComponent', () => {
  let component: RentalResidentialComponent;
  let fixture: ComponentFixture<RentalResidentialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalResidentialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalResidentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
