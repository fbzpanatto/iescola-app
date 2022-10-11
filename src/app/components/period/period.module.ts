import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeriodRoutingModule } from './period-routing.module';
import { NewPeriodComponent } from './new-period/new-period.component';
import { HomePeriodComponent } from './home-period/home-period.component';
import { DetailPeriodComponent } from './detail-period/detail-period.component';
import { MatIconModule } from "@angular/material/icon";
import { FlexModule } from "@angular/flex-layout";
import { ToolbarsModule } from "../../shared/components/toolbars/toolbars.module";


@NgModule({
  declarations: [
    NewPeriodComponent,
    HomePeriodComponent,
    DetailPeriodComponent
  ],
    imports: [
        CommonModule,
        PeriodRoutingModule,
        MatIconModule,
        FlexModule,
        ToolbarsModule
    ]
})
export class PeriodModule { }
