import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDisciplineComponent } from "./home-discipline/home-discipline.component";
import { NewDisciplineComponent } from "./new-discipline/new-discipline.component";

const routes: Routes = [
  {
    path: '',
    component: HomeDisciplineComponent
  },
  {
    path: 'new',
    component: NewDisciplineComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisciplineRoutingModule { }
