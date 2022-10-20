import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeClassComponent } from "./home-class/home-class.component";
import { NewClassComponent } from "./new-class/new-class.component";
import { DetailClassComponent } from "./detail-class/detail-class.component";

const routes: Routes = [
  {
    path: '',
    component: HomeClassComponent
  },
  {
    path: 'new',
    component: NewClassComponent
  },
  {
    path: ':id',
    component: DetailClassComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassRoutingModule { }
