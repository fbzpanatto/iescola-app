import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _token: string | undefined

  constructor() { }

  get token () {
    return this._token
  }

  set token(token) {
    this._token = token
  }
}
