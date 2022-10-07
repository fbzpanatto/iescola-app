import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeClassComponent} from "./home-class/home-class.component";
import {NewClassComponent} from "./new-class/new-class.component";

const routes: Routes = [
  {
    path: '',
    component: HomeClassComponent
  },
  {
    path: 'new',
    component: NewClassComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassRoutingModule { }
