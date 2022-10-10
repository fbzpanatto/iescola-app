import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeriodRoutingModule } from './period-routing.module';
import { NewPeriodComponent } from './new-period/new-period.component';
import { HomePeriodComponent } from './home-period/home-period.component';
import { DetailPeriodComponent } from './detail-period/detail-period.component';
import {ToolbarModule} from "../../shared/components/toolbar/toolbar.module";
import {MatIconModule} from "@angular/material/icon";
import {FlexModule} from "@angular/flex-layout";


@NgModule({
  declarations: [
    NewPeriodComponent,
    HomePeriodComponent,
    DetailPeriodComponent
  ],
  imports: [
    CommonModule,
    PeriodRoutingModule,
    ToolbarModule,
    MatIconModule,
    FlexModule
  ]
})
export class PeriodModule { }
