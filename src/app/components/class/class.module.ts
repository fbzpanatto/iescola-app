import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from "../../shared/modules/material.module";
import { ToolbarsModule } from "../../shared/components/toolbars/toolbars.module";

import { ClassRoutingModule } from './class-routing.module';
import { HomeClassComponent } from './home-class/home-class.component';
import { DetailClassComponent } from './detail-class/detail-class.component';
import { NewClassComponent } from './new-class/new-class.component';
import { FormClassComponent } from './form-class/form-class.component';

@NgModule({
  declarations: [
    HomeClassComponent,
    DetailClassComponent,
    NewClassComponent,
    FormClassComponent,
  ],
  imports: [
    CommonModule,
    ClassRoutingModule,
    MaterialModule,
    ToolbarsModule
  ]
})
export class ClassModule { }
