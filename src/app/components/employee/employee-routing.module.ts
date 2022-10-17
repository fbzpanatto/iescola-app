import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeEmployeeComponent } from "./home-employee/home-employee.component";
import { NewEmployeeComponent } from "./new-employee/new-employee.component";
import { DetailEmployeeComponent } from "./detail-employee/detail-employee.component";

const routes: Routes = [
  {
    path: '',
    component: HomeEmployeeComponent
  },
  {
    path: 'new',
    component: NewEmployeeComponent
  },
  {
    path: 'id',
    component: DetailEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
