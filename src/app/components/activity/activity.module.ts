import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityRoutingModule } from './activity-routing.module';
import { HomeActivityComponent } from './home-activity/home-activity.component';
import { DetailActivityComponent } from './detail-activity/detail-activity.component';
import { NewActivityComponent } from './new-activity/new-activity.component';
import { MatIconModule } from "@angular/material/icon";
import { FlexModule} from "@angular/flex-layout";
import { ToolbarsModule } from "../../shared/components/toolbars/toolbars.module";
import { GradeActivityComponent } from './grade-activity/grade-activity.component';


@NgModule({
  declarations: [
    HomeActivityComponent,
    DetailActivityComponent,
    NewActivityComponent,
    GradeActivityComponent
  ],
  imports: [
    CommonModule,
    ActivityRoutingModule,
    MatIconModule,
    FlexModule,
    ToolbarsModule
  ]
})
export class ActivityModule { }
