import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';

import { MaterialModule } from "../../shared/modules/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";

import { HomeTeacherComponent } from './home-teacher/home-teacher.component';
import { DetailTeacherComponent } from './detail-teacher/detail-teacher.component';
import { NewTeacherComponent } from "./new-teacher/new-teacher.component";
import { ToolbarsModule } from "../../shared/components/toolbars/toolbars.module";
import {MatRippleModule} from "@angular/material/core";

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
        ToolbarsModule,
        MatRippleModule
    ],
  providers: []
})
export class TeacherModule { }
