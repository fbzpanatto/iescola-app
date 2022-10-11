import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';

import { MaterialModule } from "../../shared/modules/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";

import { NewStudentComponent } from './new-student/new-student.component';
import { DetailStudentComponent } from './detail-student/detail-student.component';
import { HomeStudentComponent } from './home-student/home-student.component';
import {ToolbarModule} from "../../shared/components/toolbar/toolbar.module";
import {ToolbarsModule} from "../../shared/components/toolbars/toolbars.module";


@NgModule({
  declarations: [
    NewStudentComponent,
    DetailStudentComponent,
    HomeStudentComponent
  ],
    imports: [
        CommonModule,
        StudentRoutingModule,
        MaterialModule,
        FlexLayoutModule,
        ToolbarModule,
        ToolbarsModule
    ]
})
export class StudentModule { }
