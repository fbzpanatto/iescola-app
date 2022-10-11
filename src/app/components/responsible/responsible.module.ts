import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResponsibleRoutingModule } from './responsible-routing.module';

import { MaterialModule } from "../../shared/modules/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";

import { HomeResponsibleComponent } from './home-responsible/home-responsible.component';
import { NewResponsibleComponent } from './new-responsible/new-responsible.component';
import { DetailResponsabileComponent } from './detail-responsabile/detail-responsabile.component';
import {ToolbarModule} from "../../shared/components/toolbar/toolbar.module";
import {ToolbarsModule} from "../../shared/components/toolbars/toolbars.module";


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
        FlexLayoutModule,
        ToolbarModule,
        ToolbarsModule
    ]
})
export class ResponsibleModule { }
