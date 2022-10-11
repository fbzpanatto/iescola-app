import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GradeRoutingModule } from './grade-routing.module';
import { NewGradeComponent } from './new-grade/new-grade.component';
import { HomeGradeComponent } from './home-grade/home-grade.component';
import { DetailGradeComponent } from './detail-grade/detail-grade.component';
import { MatIconModule } from "@angular/material/icon";
import { FlexModule } from "@angular/flex-layout";
import { ToolbarsModule } from "../../shared/components/toolbars/toolbars.module";


@NgModule({
  declarations: [
    NewGradeComponent,
    HomeGradeComponent,
    DetailGradeComponent
  ],
  imports: [
    CommonModule,
    GradeRoutingModule,
    MatIconModule,
    FlexModule,
    ToolbarsModule
  ]
})
export class GradeModule { }
