import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewGradeComponent } from "./new-grade/new-grade.component";
import { HomeGradeComponent } from "./home-grade/home-grade.component";
import { DetailGradeComponent } from "./detail-grade/detail-grade.component";

const routes: Routes = [
  {
    path: '',
    component: HomeGradeComponent
  },
  {
    path: 'new',
    component: NewGradeComponent
  },
  {
    path: ':id',
    component: DetailGradeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GradeRoutingModule { }
