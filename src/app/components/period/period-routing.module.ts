import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePeriodComponent} from "./home-period/home-period.component";
import {NewPeriodComponent} from "./new-period/new-period.component";
import {DetailPeriodComponent} from "./detail-period/detail-period.component";

const routes: Routes = [
  {
    path: '',
    component: HomePeriodComponent
  },
  {
    path: 'new',
    component: NewPeriodComponent
  },
  {
    path: ':id',
    component: DetailPeriodComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeriodRoutingModule { }
