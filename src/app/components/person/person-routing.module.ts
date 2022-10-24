import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePersonComponent} from "./home-person/home-person.component";
import {NewPersonComponent} from "./new-person/new-person.component";
import {DetailPersonComponent} from "./detail-person/detail-person.component";

const routes: Routes = [
  {
    path: '',
    component: HomePersonComponent,
  },
  {
    path: 'new',
    component: NewPersonComponent
  },
  {
    path: ':id',
    component: DetailPersonComponent
  },
  {
    path: '',
    redirectTo: '/person',
    pathMatch: "prefix"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
