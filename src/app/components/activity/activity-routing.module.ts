import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeActivityComponent} from "./home-activity/home-activity.component";
import {NewActivityComponent} from "./new-activity/new-activity.component";
import {DetailActivityComponent} from "./detail-activity/detail-activity.component";
import {GradeActivityComponent} from "./grade-activity/grade-activity.component";

const routes: Routes = [
  {
    path: '',
    component: HomeActivityComponent
  },
  {
    path: 'new',
    component: NewActivityComponent
  },
  {
    path: ':id/grade',
    component: GradeActivityComponent
  },
  {
    path: ':id',
    component: DetailActivityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityRoutingModule { }
