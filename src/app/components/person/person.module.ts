import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import { NewPersonComponent } from './new-person/new-person.component';
import { DetailPersonComponent } from './detail-person/detail-person.component';
import { HomePersonComponent } from './home-person/home-person.component';
import { MatIconModule } from "@angular/material/icon";
import { FlexModule } from "@angular/flex-layout";
import { ToolbarsModule } from "../../shared/components/toolbars/toolbars.module";


@NgModule({
  declarations: [
    NewPersonComponent,
    DetailPersonComponent,
    HomePersonComponent
  ],
    imports: [
        CommonModule,
        PersonRoutingModule,
        MatIconModule,
        FlexModule,
        ToolbarsModule
    ]
})
export class PersonModule { }
