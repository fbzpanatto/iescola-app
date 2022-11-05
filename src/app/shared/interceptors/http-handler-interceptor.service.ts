import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthenticationService } from "../services/authentication.service";

const AUTHORIZATION_KEY = 'Authorization';

@Injectable({
  providedIn: 'root'
})
export class HttpHandlerInterceptor implements HttpInterceptor{

  constructor(private authService: AuthenticationService) {
  }

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const modifiedHttpRequest = httpRequest.clone() as any;

    HttpHandlerInterceptor.setHeader(modifiedHttpRequest, AUTHORIZATION_KEY, 'Bearer ' + this.authService.token)

    return next.handle(modifiedHttpRequest)
  }

  private static setHeader(httpRequest: any, key: string, value: boolean | number | string) {
    if (httpRequest.headers.get(key) === null) {
      httpRequest.headers = httpRequest.headers.set(key, value as string);
    }
  }
}
