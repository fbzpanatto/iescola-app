import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';

import { MaterialModule } from "../../shared/modules/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";

import { HomeTeacherComponent } from './home-teacher/home-teacher.component';
import { DetailTeacherComponent } from './detail-teacher/detail-teacher.component';
import { NewTeacherComponent } from "./new-teacher/new-teacher.component";
import { ToolbarsModule } from "../../shared/components/toolbars/toolbars.module";

@NgModule({
  declarations: [
    HomeTeacherComponent,
    DetailTeacherComponent,
    NewTeacherComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ToolbarsModule
  ],
  providers: []
})
export class TeacherModule { }
