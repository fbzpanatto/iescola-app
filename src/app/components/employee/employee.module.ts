import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from "../../shared/modules/material.module";
import { ToolbarsModule } from "../../shared/components/toolbars/toolbars.module";

import { EmployeeRoutingModule } from './employee-routing.module';
import { HomeEmployeeComponent } from './home-employee/home-employee.component';
import { DetailEmployeeComponent } from './detail-employee/detail-employee.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';

@NgModule({
  declarations: [
    HomeEmployeeComponent,
    NewEmployeeComponent,
    DetailEmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MaterialModule,
    ToolbarsModule,
  ]
})
export class EmployeeModule { }
