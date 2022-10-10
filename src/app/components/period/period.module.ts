import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeriodRoutingModule } from './period-routing.module';
import { NewPeriodComponent } from './new-period/new-period.component';
import { HomePeriodComponent } from './home-period/home-period.component';
import { DetailPeriodComponent } from './detail-period/detail-period.component';


@NgModule({
  declarations: [
    NewPeriodComponent,
    HomePeriodComponent,
    DetailPeriodComponent
  ],
  imports: [
    CommonModule,
    PeriodRoutingModule
  ]
})
export class PeriodModule { }
