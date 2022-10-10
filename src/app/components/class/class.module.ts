import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassRoutingModule } from './class-routing.module';

import { MaterialModule } from "../../shared/modules/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";

import { HomeClassComponent } from './home-class/home-class.component';
import { DetailClassComponent } from './detail-class/detail-class.component';
import { NewClassComponent } from './new-class/new-class.component';
import { ToolbarModule } from "../../shared/components/toolbar/toolbar.module";

@NgModule({
  declarations: [
    HomeClassComponent,
    DetailClassComponent,
    NewClassComponent,
  ],
  imports: [
    CommonModule,
    ClassRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ToolbarModule
  ]
})
export class ClassModule { }
