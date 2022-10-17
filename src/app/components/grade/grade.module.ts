import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from "../../shared/modules/material.module";
import { ToolbarsModule } from "../../shared/components/toolbars/toolbars.module";

import { GradeRoutingModule } from './grade-routing.module';
import { NewGradeComponent } from './new-grade/new-grade.component';
import { HomeGradeComponent } from './home-grade/home-grade.component';
import { DetailGradeComponent } from './detail-grade/detail-grade.component';

@NgModule({
  declarations: [
    NewGradeComponent,
    HomeGradeComponent,
    DetailGradeComponent
  ],
  imports: [
    CommonModule,
    GradeRoutingModule,
    MaterialModule,
    ToolbarsModule
  ]
})
export class GradeModule { }
