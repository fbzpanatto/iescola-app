import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from "../../shared/modules/material.module";
import { ToolbarsModule } from "../../shared/components/toolbars/toolbars.module";

import { TeacherRoutingModule } from './teacher-routing.module';
import { HomeTeacherComponent } from './home-teacher/home-teacher.component';
import { DetailTeacherComponent } from './detail-teacher/detail-teacher.component';
import { NewTeacherComponent } from "./new-teacher/new-teacher.component";
import { FormTeacherComponent } from './form-teacher/form-teacher.component';

@NgModule({
  declarations: [
    HomeTeacherComponent,
    DetailTeacherComponent,
    NewTeacherComponent,
    FormTeacherComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    MaterialModule,
    ToolbarsModule,
  ]
})
export class TeacherModule { }
