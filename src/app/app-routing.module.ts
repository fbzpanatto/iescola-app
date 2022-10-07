import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassComponent } from "./components/class/class.component";
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
    redirectTo: 'home',

  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'escola.app - Home'
  },
  {
    path: 'class',
    component: ClassComponent,
    title: 'escola.app - Salas'
  },
  {
    path: 'student',
    title: 'escola.app - Alunos',
    loadChildren: () => import('./components/student/student.module').then(m => m.StudentModule)
  },
  {
    path: 'teacher',
    title: 'escola.app - Professores',
    loadChildren: () => import('./components/teacher/teacher.module').then(m => m.TeacherModule)
  },
  {
    path: 'discipline',
    component: DisciplineComponent,
    title: 'escola.app - Disciplinas'
  },
  {
    path: 'activity',
    component: ActivityComponent,
    title: 'escola.app - Atividades'
  },
  {
    path: 'grade',
    component: GradeComponent,
    title: 'escola.app - Notas'
  },
  {
    path: 'help',
    component: HelpComponent,
    title: 'escola.app - Ajuda'
  },
  {
    path: 'terms',
    component: TermsComponent,
    title: 'escola.app - Termos'
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
