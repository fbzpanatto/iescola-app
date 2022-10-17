import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeClassTypeComponent } from "./home-class-type/home-class-type.component";
import { NewClassTypeComponent } from "./new-class-type/new-class-type.component";
import { DetailClassTypeComponent } from "./detail-class-type/detail-class-type.component";

const routes: Routes = [
  {
    path: '',
    component: HomeClassTypeComponent
  },
  {
    path: 'new',
    component: NewClassTypeComponent
  },
  {
    path: 'id',
    component: DetailClassTypeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassTypeRoutingModule { }
