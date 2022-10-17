import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './shared/modules/material.module';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './shared/components/authentication/authentication.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { HelpComponent } from './components/help/help.component';
import { TermsComponent } from './components/terms/terms.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AuthenticationComponent,
    HomeComponent,
    HelpComponent,
    TermsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
