import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import {AuthenticationService} from "./shared/services/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'iescola-app';

  constructor(private http: HttpClient, private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.http
      .post(environment.GIGABASE.PROOF_URL,
        {...environment.bodyPost},
        {responseType: 'text'})
      .subscribe({
        next: async token => {
          this.authService.token = token
        }
      })
  }
}
