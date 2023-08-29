import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarViewComponent } from './toolbar-view/toolbar-view.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { GridListComponent } from './grid-list/grid-list.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select'; 
import { MatOptionModule } from '@angular/material/core';
import{PowerLineChartComponent} from './power-line-chart/power-line-chart.component'
import { ChartModule } from 'angular-highcharts';
import { GaugeComponent } from './gauge/gauge.component';
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { NgxGaugeModule } from 'ngx-gauge'; 
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { PowerFactorComponent } from './power-factor/power-factor.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarViewComponent,
    GridListComponent,
    PowerLineChartComponent,
     GaugeComponent,
     PowerFactorComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatProgressBarModule,
    ChartModule,
    NgxGaugeModule,
    NgxChartsModule,
    MatMenuModule,
    MatCardModule,
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
