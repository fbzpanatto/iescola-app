import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResponsibleRoutingModule } from './responsible-routing.module';

import { MaterialModule } from "../../shared/modules/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";

import { HomeResponsibleComponent } from './home-responsible/home-responsible.component';
import { NewResponsibleComponent } from './new-responsible/new-responsible.component';
import { DetailResponsabileComponent } from './detail-responsabile/detail-responsabile.component';


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
    FlexLayoutModule
  ]
})
export class ResponsibleModule { }