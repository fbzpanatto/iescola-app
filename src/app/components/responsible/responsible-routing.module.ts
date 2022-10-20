import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeResponsibleComponent } from "./home-responsible/home-responsible.component";
import { NewResponsibleComponent } from "./new-responsible/new-responsible.component";
import { DetailResponsabileComponent } from "./detail-responsabile/detail-responsabile.component";

const routes: Routes = [
  {
    path: '',
    component: HomeResponsibleComponent
  },
  {
    path: 'new',
    component: NewResponsibleComponent
  },
  {
    path: ':id',
    component: DetailResponsabileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResponsibleRoutingModule { }
