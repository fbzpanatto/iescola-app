import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { DetailEmployeeComponent } from './detail-employee/detail-employee.component';
import { HomeEmployeeComponent } from './home-employee/home-employee.component';
import { MatIconModule } from "@angular/material/icon";
import { FlexModule } from "@angular/flex-layout";
import { ToolbarsModule } from "../../shared/components/toolbars/toolbars.module";


@NgModule({
  declarations: [
    NewEmployeeComponent,
    DetailEmployeeComponent,
    HomeEmployeeComponent
  ],
    imports: [
        CommonModule,
        EmployeeRoutingModule,
        MatIconModule,
        FlexModule,
        ToolbarsModule
    ]
})
export class EmployeeModule { }
