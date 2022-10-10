import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeActivityComponent} from "./home-activity/home-activity.component";
import {NewActivityComponent} from "./new-activity/new-activity.component";

const routes: Routes = [
  {
    path: '',
    component: HomeActivityComponent
  },
  {
    path: 'new',
    component: NewActivityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityRoutingModule { }
