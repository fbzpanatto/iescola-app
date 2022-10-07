import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeStudentComponent } from "./home-student/home-student.component";
import {NewStudentComponent} from "./new-student/new-student.component";

const routes: Routes = [
  {
    path: '',
    component: HomeStudentComponent
  },
  {
    path: 'new',
    component: NewStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
