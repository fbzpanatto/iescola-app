import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassRoutingModule } from './class-routing.module';

import { MaterialModule } from "../../shared/modules/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";

import { HomeClassComponent } from './home-class/home-class.component';
import { DetailClassComponent } from './detail-class/detail-class.component';
import { NewClassComponent } from './new-class/new-class.component';
import { ToolbarComponent } from "../../shared/components/toolbar/toolbar.component";


@NgModule({
  declarations: [
    HomeClassComponent,
    DetailClassComponent,
    NewClassComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    ClassRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class ClassModule { }
