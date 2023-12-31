import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerFactorComponent } from './power-factor.component';

describe('PowerFactorComponent', () => {
  let component: PowerFactorComponent;
  let fixture: ComponentFixture<PowerFactorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PowerFactorComponent]
    });
    fixture = TestBed.createComponent(PowerFactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
