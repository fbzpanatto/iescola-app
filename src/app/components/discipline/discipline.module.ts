import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisciplineRoutingModule } from './discipline-routing.module';
import { NewDisciplineComponent } from './new-discipline/new-discipline.component';
import { DetailDisciplineComponent } from './detail-discipline/detail-discipline.component';
import { HomeDisciplineComponent } from './home-discipline/home-discipline.component';
import { MaterialModule } from "../../shared/modules/material.module";
import { ToolbarModule } from "../../shared/components/toolbar/toolbar.module";
import {FlexModule} from "@angular/flex-layout";
import {ToolbarsModule} from "../../shared/components/toolbars/toolbars.module";


@NgModule({
  declarations: [
    NewDisciplineComponent,
    DetailDisciplineComponent,
    HomeDisciplineComponent
  ],
    imports: [
        CommonModule,
        DisciplineRoutingModule,
        MaterialModule,
        ToolbarModule,
        FlexModule,
        ToolbarsModule
    ]
})
export class DisciplineModule { }
