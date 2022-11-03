import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from "../../shared/modules/material.module";
import { ToolbarsModule } from "../../shared/components/toolbars/toolbars.module";

import { SchoolyearRoutingModule } from './schoolyear-routing.module';
import { HomeSchoolyearComponent } from './home-schoolyear/home-schoolyear.component';
import { DetailSchoolyearComponent } from './detail-schoolyear/detail-schoolyear.component';
import { NewSchoolyearComponent } from './new-schoolyear/new-schoolyear.component';
import { FormYearComponent } from './form-schoolyear/form-year.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    HomeSchoolyearComponent,
    DetailSchoolyearComponent,
    NewSchoolyearComponent,
    FormYearComponent
  ],
    imports: [
        CommonModule,
        SchoolyearRoutingModule,
        MaterialModule,
        ToolbarsModule,
        ReactiveFormsModule
    ]
})
export class SchoolyearModule { }
