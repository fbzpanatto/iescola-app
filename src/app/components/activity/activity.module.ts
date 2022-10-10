import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityRoutingModule } from './activity-routing.module';
import { HomeActivityComponent } from './home-activity/home-activity.component';
import { DetailActivityComponent } from './detail-activity/detail-activity.component';
import { NewActivityComponent } from './new-activity/new-activity.component';
import {MatIconModule} from "@angular/material/icon";
import {ToolbarModule} from "../../shared/components/toolbar/toolbar.module";
import {FlexModule} from "@angular/flex-layout";


@NgModule({
  declarations: [
    HomeActivityComponent,
    DetailActivityComponent,
    NewActivityComponent
  ],
  imports: [
    CommonModule,
    ActivityRoutingModule,
    MatIconModule,
    ToolbarModule,
    FlexModule
  ]
})
export class ActivityModule { }
