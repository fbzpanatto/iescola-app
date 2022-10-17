import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassTypeRoutingModule } from './class-type-routing.module';
import { NewClassTypeComponent } from './new-class-type/new-class-type.component';
import { DetailClassTypeComponent } from './detail-class-type/detail-class-type.component';
import { HomeClassTypeComponent } from './home-class-type/home-class-type.component';


@NgModule({
  declarations: [
    NewClassTypeComponent,
    DetailClassTypeComponent,
    HomeClassTypeComponent
  ],
  imports: [
    CommonModule,
    ClassTypeRoutingModule
  ]
})
export class ClassTypeModule { }
