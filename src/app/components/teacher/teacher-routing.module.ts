import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeTeacherComponent } from "./home-teacher/home-teacher.component";
import { NewTeacherComponent } from "./new-teacher/new-teacher.component";

const routes: Routes = [
  {
    path: "",
    component: HomeTeacherComponent
  },
  {
    path: "new",
    component: NewTeacherComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
