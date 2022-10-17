import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';

import { MaterialModule } from "../../shared/modules/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";

import { HomeEmployeeComponent } from './home-employee/home-employee.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { DetailEmployeeComponent } from './detail-employee/detail-employee.component';
import { ToolbarsModule } from "../../shared/components/toolbars/toolbars.module";

@NgModule({
  declarations: [
    HomeEmployeeComponent,
    NewEmployeeComponent,
    DetailEmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ToolbarsModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  providers: []
})
export class EmployeeModule { }
