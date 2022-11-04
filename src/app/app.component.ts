import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AuthenticationService } from "./shared/services/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'iescola-app';

  constructor(private http: HttpClient, private authService: AuthenticationService) {}

  ngOnInit() {
    if(!this.authService.isLogged) {
      this.authService.openDialogLogin()
    }
  }
}
