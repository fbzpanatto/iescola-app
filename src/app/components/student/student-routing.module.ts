import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeStudentComponent } from "./home-student/home-student.component";
import { NewStudentComponent } from "./new-student/new-student.component";
import { DetailStudentComponent } from "./detail-student/detail-student.component";

const routes: Routes = [
  {
    path: '',
    component: HomeStudentComponent
  },
  {
    path: 'new',
    component: NewStudentComponent
  },
  {
    path: ':id',
    component: DetailStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
