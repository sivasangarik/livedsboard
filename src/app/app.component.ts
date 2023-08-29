import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})

export class AppComponent {
  title = 'livedsboard';
 
   gaugeType = "semi"; //full, arch  
   gaugeValue = 28.3;  
   gaugeLabel = "Speed";  
   gaugeAppendText = "km/hr";  
   value: number = 0;
  
  private updateSubscription: Subscription | undefined;
  gaugeTypes: string[] = ['Voltage (V)', 'Current (A)', 'Power (<W)', 'Power Factor'];

  ngOnInit(): void {
    this.startUpdatingGaugeValue();
  }

  ngOnDestroy(): void {
    if (this.updateSubscription) {
      this.updateSubscription.unsubscribe();
    }
  }

  startUpdatingGaugeValue(): void {
    this.updateSubscription = interval(2000).subscribe(() => {
      this.updateGaugeValue();
    });
  }

  updateGaugeValue(): void {
    this.value = Math.floor(Math.random() * 101);
  }
  

}
