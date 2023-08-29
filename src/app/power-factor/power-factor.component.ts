import { Component } from '@angular/core';
import { ChartService } from '../chart.service';
import { Chart } from 'angular-highcharts';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-power-factor',
  templateUrl: './power-factor.component.html',
  styleUrls: ['./power-factor.component.css']
})
export class PowerFactorComponent {
  chart: Chart = new Chart({
    chart: {
      type: 'line',
      width: 500, 
      height: 250
    },
    title: {
      text: 'Power Factor'
    },
    series: [
      {
        name: 'Power',
        type: 'line',
        data: []
      }
    ]
  });

  private updateSubscription: Subscription = new Subscription();

  constructor(private chartService: ChartService) {}

  ngOnInit(): void {
    this.updateSubscription = this.chartService.getFactorData().subscribe(data => {
      // Use the safe navigation operator here
      this.chart.ref?.series[0]?.setData(data, true);
    });
  }

  ngOnDestroy(): void {
    if (this.updateSubscription) {
      this.updateSubscription.unsubscribe();
    }
  }

}
