import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolyearRoutingModule } from './schoolyear-routing.module';
import { HomeSchoolyearComponent } from './home-schoolyear/home-schoolyear.component';
import { DetailSchoolyearComponent } from './detail-schoolyear/detail-schoolyear.component';
import { NewSchoolyearComponent } from './new-schoolyear/new-schoolyear.component';


@NgModule({
  declarations: [
    HomeSchoolyearComponent,
    DetailSchoolyearComponent,
    NewSchoolyearComponent
  ],
  imports: [
    CommonModule,
    SchoolyearRoutingModule
  ]
})
export class SchoolyearModule { }
