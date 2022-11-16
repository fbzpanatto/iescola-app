import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { LoginDialogService } from "./shared/components/login/login-dialog.service";
import {AuthenticationService} from "./shared/services/authentication.service";
import {LoadingService} from "./shared/services/loading.service";
import {delay} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'iescola-app';
  loading: boolean = false

  constructor(
    private http: HttpClient,
    private loginService: LoginDialogService,
    private _loading: LoadingService,
    private authenticationService: AuthenticationService
  ) {
  }

  ngOnInit() {
    this.listenToLoading()
    this.authenticationService.isLogged ? null : this.loginService.openLoginDialog()
  }

  listenToLoading() {
    this._loading.loadingSub
      .pipe(delay(0))
      .subscribe((loading) => {
        this.loading = loading
      })
  }
}
