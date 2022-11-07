import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { LoginDialogService } from "./shared/components/login/login-dialog.service";
import {AuthenticationService} from "./shared/services/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'iescola-app';

  constructor(
    private http: HttpClient,
    private loginService: LoginDialogService,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    this.authenticationService.isLogged ? null : this.loginService.openLoginDialog()
  }
}
