import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from "../../shared/modules/material.module";
import { ToolbarsModule } from "../../shared/components/toolbars/toolbars.module";

import { DisciplineRoutingModule } from './discipline-routing.module';
import { HomeDisciplineComponent } from './home-discipline/home-discipline.component';
import { DetailDisciplineComponent } from './detail-discipline/detail-discipline.component';
import { NewDisciplineComponent } from './new-discipline/new-discipline.component';
import { FormDisciplineComponent } from './form-discipline/form-discipline.component';

@NgModule({
  declarations: [
    HomeDisciplineComponent,
    DetailDisciplineComponent,
    NewDisciplineComponent,
    FormDisciplineComponent
  ],
  imports: [
    CommonModule,
    DisciplineRoutingModule,
    MaterialModule,
    ToolbarsModule
  ]
})
export class DisciplineModule { }
