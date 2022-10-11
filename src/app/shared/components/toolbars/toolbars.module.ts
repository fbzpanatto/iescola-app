import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeToolbarComponent } from './home-toolbar/home-toolbar.component';
import { NewToolbarComponent } from './new-toolbar/new-toolbar.component';
import { MaterialModule } from "../../modules/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [
    HomeToolbarComponent,
    NewToolbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    HomeToolbarComponent,
    NewToolbarComponent
  ]
})
export class ToolbarsModule { }