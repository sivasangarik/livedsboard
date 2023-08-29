import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.css']
})
export class GaugeComponent implements OnInit, OnDestroy {
  private updateSubscription: Subscription | undefined;
  gaugeTypes: string[] = ['Voltage (V)', 'Current (A)', 'Power (kW)', 'Power Factor','frequency(Hz)'];
  
  gaugeValues: number[] = this.generateRandomValues();

  ngOnInit(): void {
    this.startUpdatingGaugeValues();
  }

  ngOnDestroy(): void {
    if (this.updateSubscription) {
      this.updateSubscription.unsubscribe();
    }
  }

  startUpdatingGaugeValues(): void {
    this.updateSubscription = interval(2000).subscribe(() => {
      this.updateGaugeValues();
    });
  }

  generateRandomValues(): number[] {
    return this.gaugeTypes.map(() => this.generateRandomValue());
  }

  generateRandomValue(): number {
    const minValue = 0;
    const maxValue = 100;
    const decimalPlaces = 1; // Adjust as needed

    const randomValue = Math.random() * (maxValue - minValue) + minValue;
    return parseFloat(randomValue.toFixed(decimalPlaces));
  }

  updateGaugeValues(): void {
    this.gaugeValues = this.generateRandomValues();
  }
}
