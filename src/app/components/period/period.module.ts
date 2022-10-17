import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from "../../shared/modules/material.module";
import { ToolbarsModule } from "../../shared/components/toolbars/toolbars.module";

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
    PeriodRoutingModule,
    MaterialModule,
    ToolbarsModule
  ]
})
export class PeriodModule { }
