import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeToolbarComponent } from './home-toolbar/home-toolbar.component';
import { NewToolbarComponent } from './new-toolbar/new-toolbar.component';
import { MaterialModule } from "../../modules/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatRippleModule } from "@angular/material/core";
import { EditToolbarComponent } from './edit-toolbar/edit-toolbar.component';

@NgModule({
  declarations: [
    HomeToolbarComponent,
    NewToolbarComponent,
    EditToolbarComponent
  ],
    imports: [
        CommonModule,
        MaterialModule,
        FlexLayoutModule,
        MatRippleModule
    ],
    exports: [
        HomeToolbarComponent,
        NewToolbarComponent,
        EditToolbarComponent
    ]
})
export class ToolbarsModule { }
