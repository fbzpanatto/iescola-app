import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from './shared/modules/material.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './shared/components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { HelpComponent } from './components/help/help.component';
import { TermsComponent } from './components/terms/terms.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { DialogComponent } from './shared/components/dialog/dialog.component';
import {TokenInterceptorService} from "./shared/interceptors/token-interceptor.service";
import {MAT_DATE_LOCALE} from "@angular/material/core";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    HomeComponent,
    HelpComponent,
    TermsComponent,
    DialogComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule
    ],
  exports: [
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true},
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
