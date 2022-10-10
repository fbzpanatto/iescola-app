import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from "./toolbar.component";
import { MaterialModule } from "../../modules/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterLink
  ],
  exports: [
    ToolbarComponent
  ]
})
export class ToolbarModule { }
