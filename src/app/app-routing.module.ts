import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassComponent } from "./components/class/class.component";
import { StudentComponent } from "./components/student/student.component";
import { TeacherComponent } from "./components/teacher/teacher.component";
import { DisciplineComponent } from "./components/discipline/discipline.component";
import { ActivityComponent } from "./components/activity/activity.component";
import { GradeComponent } from "./components/grade/grade.component";
import { HomeComponent} from "./components/home/home.component";
import { HelpComponent } from "./components/help/help.component";
import { TermsComponent } from "./components/terms/terms.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'class',
    component: ClassComponent
  },
  {
    path: 'student',
    component: StudentComponent
  },
  {
    path: 'teacher',
    component: TeacherComponent
  },
  {
    path: 'discipline',
    component: DisciplineComponent
  },
  {
    path: 'activity',
    component: ActivityComponent
  },
  {
    path: 'grade',
    component: GradeComponent
  },
  {
    path: 'help',
    component: HelpComponent
  },
  {
    path: 'terms',
    component: TermsComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
