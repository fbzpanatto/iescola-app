import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from "../../shared/modules/material.module";
import { ToolbarsModule } from "../../shared/components/toolbars/toolbars.module";

import { PersonRoutingModule } from './person-routing.module';
import { NewPersonComponent } from './new-person/new-person.component';
import { DetailPersonComponent } from './detail-person/detail-person.component';
import { HomePersonComponent } from './home-person/home-person.component';

@NgModule({
  declarations: [
    NewPersonComponent,
    DetailPersonComponent,
    HomePersonComponent
  ],
  imports: [
    CommonModule,
    PersonRoutingModule,
    MaterialModule,
    ToolbarsModule
  ]
})
export class PersonModule { }
