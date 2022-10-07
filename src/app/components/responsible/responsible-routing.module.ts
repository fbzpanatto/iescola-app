import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeResponsibleComponent } from "./home-responsible/home-responsible.component";
import { NewResponsibleComponent } from "./new-responsible/new-responsible.component";

const routes: Routes = [
  {
    path: '',
    component: HomeResponsibleComponent
  },
  {
    path: 'new',
    component: NewResponsibleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResponsibleRoutingModule { }
