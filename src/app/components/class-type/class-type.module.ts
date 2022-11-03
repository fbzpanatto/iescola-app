import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from "../../shared/modules/material.module";
import { ToolbarsModule } from "../../shared/components/toolbars/toolbars.module";

import { ClassTypeRoutingModule } from './class-type-routing.module';
import { HomeClassTypeComponent } from './home-class-type/home-class-type.component';
import { DetailClassTypeComponent } from './detail-class-type/detail-class-type.component';
import { NewClassTypeComponent } from './new-class-type/new-class-type.component';
import { FormClassTypeComponent } from './form-class-type/form-class-type.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    HomeClassTypeComponent,
    DetailClassTypeComponent,
    NewClassTypeComponent,
    FormClassTypeComponent
  ],
    imports: [
        CommonModule,
        ClassTypeRoutingModule,
        MaterialModule,
        ToolbarsModule,
        ReactiveFormsModule,
    ]
})
export class ClassTypeModule { }
