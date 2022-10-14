import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePersonComponent} from "./home-person/home-person.component";
import {NewPersonComponent} from "./new-person/new-person.component";

const routes: Routes = [
  {
    path: '',
    component: HomePersonComponent
  },
  {
    path: 'new',
    component: NewPersonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
