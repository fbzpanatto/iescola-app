import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { LoginDialogService } from "./shared/components/login/login-dialog.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'iescola-app';

  constructor(private http: HttpClient, private loginService: LoginDialogService) {}

  ngOnInit() {
    this.loginService.openLoginDialog()
  }
}
