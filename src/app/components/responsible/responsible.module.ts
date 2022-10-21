import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from "../../shared/modules/material.module";
import { ToolbarsModule } from "../../shared/components/toolbars/toolbars.module";

import { ResponsibleRoutingModule } from './responsible-routing.module';
import { HomeResponsibleComponent } from './home-responsible/home-responsible.component';
import { NewResponsibleComponent } from './new-responsible/new-responsible.component';
import { DetailResponsabileComponent } from './detail-responsabile/detail-responsabile.component';
import {ReactiveFormsModule} from "@angular/forms";
import { FormResponsabileComponent } from './form-responsabile/form-responsabile.component';

@NgModule({
  declarations: [
    HomeResponsibleComponent,
    NewResponsibleComponent,
    DetailResponsabileComponent,
    FormResponsabileComponent
  ],
  imports: [
    CommonModule,
    ResponsibleRoutingModule,
    MaterialModule,
    ToolbarsModule,
    ReactiveFormsModule
  ]
})
export class ResponsibleModule { }
