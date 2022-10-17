import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResponsibleRoutingModule } from './responsible-routing.module';

import { MaterialModule } from "../../shared/modules/material.module";

import { HomeResponsibleComponent } from './home-responsible/home-responsible.component';
import { NewResponsibleComponent } from './new-responsible/new-responsible.component';
import { DetailResponsabileComponent } from './detail-responsabile/detail-responsabile.component';
import { ToolbarsModule } from "../../shared/components/toolbars/toolbars.module";


@NgModule({
  declarations: [
    HomeResponsibleComponent,
    NewResponsibleComponent,
    DetailResponsabileComponent
  ],
    imports: [
        CommonModule,
        ResponsibleRoutingModule,
        MaterialModule,
        ToolbarsModule
    ]
})
export class ResponsibleModule { }
