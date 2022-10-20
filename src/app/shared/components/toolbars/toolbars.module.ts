import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeToolbarComponent } from './home-toolbar/home-toolbar.component';
import { MaterialModule } from "../../modules/material.module";

@NgModule({
  declarations: [
    HomeToolbarComponent,
  ],
    imports: [
        CommonModule,
        MaterialModule,
    ],
    exports: [
        HomeToolbarComponent,
    ]
})
export class ToolbarsModule { }
