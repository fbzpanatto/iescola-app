import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from "../../shared/modules/material.module";
import { ToolbarsModule } from "../../shared/components/toolbars/toolbars.module";

import { SchoolyearRoutingModule } from './schoolyear-routing.module';
import { HomeSchoolyearComponent } from './home-schoolyear/home-schoolyear.component';
import { DetailSchoolyearComponent } from './detail-schoolyear/detail-schoolyear.component';
import { NewSchoolyearComponent } from './new-schoolyear/new-schoolyear.component';
import { FormSchoolyearComponent } from './form-schoolyear/form-schoolyear.component';

@NgModule({
  declarations: [
    HomeSchoolyearComponent,
    DetailSchoolyearComponent,
    NewSchoolyearComponent,
    FormSchoolyearComponent
  ],
  imports: [
    CommonModule,
    SchoolyearRoutingModule,
    MaterialModule,
    ToolbarsModule
  ]
})
export class SchoolyearModule { }
