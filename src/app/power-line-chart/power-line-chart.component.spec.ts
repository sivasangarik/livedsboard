import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerLineChartComponent } from './power-line-chart.component';

describe('PowerLineChartComponent', () => {
  let component: PowerLineChartComponent;
  let fixture: ComponentFixture<PowerLineChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PowerLineChartComponent]
    });
    fixture = TestBed.createComponent(PowerLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
