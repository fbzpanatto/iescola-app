import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from "../../shared/modules/material.module";
import { ToolbarsModule } from "../../shared/components/toolbars/toolbars.module";

import { StudentRoutingModule } from './student-routing.module';
import { NewStudentComponent } from './new-student/new-student.component';
import { DetailStudentComponent } from './detail-student/detail-student.component';
import { HomeStudentComponent } from './home-student/home-student.component';
import { FormStudentComponent } from './form-student/form-student.component';

@NgModule({
  declarations: [
    NewStudentComponent,
    DetailStudentComponent,
    HomeStudentComponent,
    FormStudentComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MaterialModule,
    ToolbarsModule
  ]
})
export class StudentModule { }
