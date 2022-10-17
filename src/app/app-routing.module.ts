import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    path: 'employee',
    title: 'escola.app - Colaboradores',
    loadChildren: () => import('./components/employee/employee.module').then(m => m.EmployeeModule)
  },
  {
    path: 'classtype',
    title: 'escola.app - Categoria Educacional',
    loadChildren: () => import('./components/class-type/class-type.module').then(m => m.ClassTypeModule)
  },
  {
    path: 'class',
    title: 'escola.app - Salas',
    loadChildren: () => import('./components/class/class.module').then(m => m.ClassModule)
  },
  {
    path: 'student',
    title: 'escola.app - Alunos',
    loadChildren: () => import('./components/student/student.module').then(m => m.StudentModule)
  },
  {
    path: 'responsible',
    title: 'escola.app - Responsáveis',
    loadChildren: () => import('./components/responsible/responsible.module').then(m => m.ResponsibleModule)
  },
  {
    path: 'teacher',
    title: 'escola.app - Professores',
    loadChildren: () => import('./components/teacher/teacher.module').then(m => m.TeacherModule)
  },
  {
    path: 'discipline',
    title: 'escola.app - Disciplinas',
    loadChildren: () => import('./components/discipline/discipline.module').then(m => m.DisciplineModule)
  },
  {
    path: 'person',
    title: 'escola.app - Pessoas',
    loadChildren: () => import('./components/person/person.module').then(m => m.PersonModule)
  },
  {
    path: 'activity',
    title: 'escola.app - Atividades',
    loadChildren: () => import('./components/activity/activity.module').then(m => m.ActivityModule)
  },
  {
    path: 'grade',
    title: 'escola.app - Notas',
    loadChildren: () => import('./components/grade/grade.module').then(m => m.GradeModule)
  },
  {
    path: 'period',
    title: 'escola.app - Período',
    loadChildren: () => import('./components/period/period.module').then(m => m.PeriodModule)
  },
  {
    path: 'schoolyear',
    title: 'escola.app - Ano Letivo',
    loadChildren: () => import('./components/schoolyear/schoolyear.module').then(m => m.SchoolyearModule)
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
