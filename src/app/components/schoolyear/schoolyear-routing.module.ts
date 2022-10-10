import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeSchoolyearComponent} from "./home-schoolyear/home-schoolyear.component";
import {NewSchoolyearComponent} from "./new-schoolyear/new-schoolyear.component";
import {DetailSchoolyearComponent} from "./detail-schoolyear/detail-schoolyear.component";

const routes: Routes = [
  {
    path: '',
    component: HomeSchoolyearComponent
  },
  {
    path: 'new',
    component: NewSchoolyearComponent
  },
  {
    path: ':id',
    component: DetailSchoolyearComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolyearRoutingModule { }
