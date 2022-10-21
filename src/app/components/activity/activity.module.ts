import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from "../../shared/modules/material.module";
import { ToolbarsModule } from "../../shared/components/toolbars/toolbars.module";

import { ActivityRoutingModule } from './activity-routing.module';
import { HomeActivityComponent } from './home-activity/home-activity.component';
import { DetailActivityComponent } from './detail-activity/detail-activity.component';
import { NewActivityComponent } from './new-activity/new-activity.component';
import { GradeActivityComponent } from './grade-activity/grade-activity.component';
import { FormActivityComponent } from './form-activity/form-activity.component';


@NgModule({
  declarations: [
    HomeActivityComponent,
    DetailActivityComponent,
    NewActivityComponent,
    GradeActivityComponent,
    FormActivityComponent
  ],
  imports: [
    CommonModule,
    ActivityRoutingModule,
    ToolbarsModule,
    MaterialModule
  ]
})
export class ActivityModule { }
