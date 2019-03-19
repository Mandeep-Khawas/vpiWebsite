import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeVipComponent } from './become-vip.component';

describe('BecomeVipComponent', () => {
  let component: BecomeVipComponent;
  let fixture: ComponentFixture<BecomeVipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BecomeVipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomeVipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
