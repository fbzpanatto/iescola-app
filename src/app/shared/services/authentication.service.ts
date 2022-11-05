import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subject, Subscription, takeUntil} from "rxjs";
import { environment } from "../../../environments/environment";

const LOCAL_STORAGE_TOKEN_KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private destroy$ = new Subject<void>()

  private authenticationSubscription?: Subscription;
  private refreshSubscription?: Subscription
  private refreshTimeout: any

  private _token: string | null = null
  private readonly authenticate = new Subject<string | null>()

  constructor(
    private httpClient: HttpClient,
  ) { }

  signIn(email: string, password: string) {
    return new Promise<void>(async(resolve, reject) => {
      try {
        this.authenticationSubscription?.unsubscribe();

        await this.clear();

        this.authenticationSubscription = this.httpClient
          .post(environment.GIGABASE.PROOF_URL,
            {
              email,
              password,
              application: "odata-server"
            },
            {
              responseType: 'text'
            })
          .pipe(takeUntil(this.destroy$))
          .subscribe({
            next: async token => {

              await this.setToken(token)

              this.authenticate.next(this.token);

              resolve()
            },
            error: error => reject(error)
          })
      } catch (error) {
        reject(error)
      }
    })
  }

  private async setToken(token: string) {
    this.token = token
    window.localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token)
  }

  private async clear(onlyRefresh = false) {
    this.refreshSubscription?.unsubscribe()
    clearTimeout(this.refreshTimeout)

    if(!onlyRefresh) {
      this.token = null;
      await window.localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY)
    }
  }

  get token () {
    return this._token
  }

  set token(token) {
    this._token = token
  }
}
