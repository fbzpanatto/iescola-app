import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassRoutingModule } from './class-routing.module';
import { HomeClassComponent } from './home-class/home-class.component';
import { DetailClassComponent } from './detail-class/detail-class.component';
import { NewClassComponent } from './new-class/new-class.component';


@NgModule({
  declarations: [
    HomeClassComponent,
    DetailClassComponent,
    NewClassComponent
  ],
  imports: [
    CommonModule,
    ClassRoutingModule
  ]
})
export class ClassModule { }
