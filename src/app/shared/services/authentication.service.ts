import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { LoginDialogService } from "../components/login/login-dialog.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _token: string | undefined
  private _isLogged: boolean = false

  constructor(private http: HttpClient, private loginService: LoginDialogService) { }

  openLoginDialog() {
    this.loginService.openLoginDialog()
      .afterClosed()
      .subscribe({
        next: (token) => this.setLoggedVariables(token)
      })
  }

  private setSession() {}

  setLoggedVariables(token: string) {
    this.isLogged = true
    this.token = token
  }

  get isLogged() {
    return  this._isLogged
  }

  set isLogged(boolean) {
    this._isLogged = boolean
  }

  get token () {
    return this._token
  }

  set token(token) {
    this._token = token
  }
}
