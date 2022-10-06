import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material.module';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { AuthenticationComponent } from './shared/components/authentication/authentication.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ClassComponent } from './components/class/class.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { StudentComponent } from './components/student/student.component';
import { DisciplineComponent } from './components/discipline/discipline.component';
import { ActivityComponent } from './components/activity/activity.component';
import { GradeComponent } from './components/grade/grade.component';
import { HomeComponent } from './components/home/home.component';
import { HelpComponent } from './components/help/help.component';
import { TermsComponent } from './components/terms/terms.component';
import { NewTeacherComponent } from './components/teacher/new-teacher/new-teacher.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AuthenticationComponent,
    ClassComponent,
    TeacherComponent,
    StudentComponent,
    DisciplineComponent,
    ActivityComponent,
    GradeComponent,
    HomeComponent,
    HelpComponent,
    TermsComponent,
    NewTeacherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
