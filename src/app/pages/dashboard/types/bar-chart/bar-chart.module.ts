import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarChartPageRoutingModule } from './bar-chart-routing.module';

import { BarChartPage } from './bar-chart.page';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarChartPageRoutingModule,
    NgChartsModule
  ],
  declarations: [BarChartPage]
})
export class BarChartPageModule {}
